<?php
	header('Access-Control-Allow-Origin: http://localhost:3000');
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "ecommerce";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);

	// Check connection
	if ($conn->connect_error) {
		error_log("Connection failed: " . $conn->connect_error); // Log error to a file
		die(json_encode(['error' => 'Database connection failed'])); // Return a JSON response
	}
	echo "Database Connected.\n";

	$login_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$login_password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

	$stmt = $conn->prepare("SELECT * FROM t_utente_2 WHERE email = ?");
	$stmt->bind_param("s", $login_email);

	$stmt->execute();
	$result = $stmt->get_result();
	
	if ($result->num_rows == 0) {
		// User does not exist, proceed with registration
		$hashedPass = password_hash($login_password, PASSWORD_DEFAULT); 
		$insert_stmt = $conn->prepare("INSERT INTO t_utente_2 (username, email, password) VALUES ('mario', ?, ?)");
		$insert_stmt->bind_param("ss", $login_email, $hashedPass);
		$insert_stmt->execute();
		$insert_stmt->close();
		echo json_encode(['success' => "User registered successfully"]);
	} else {
		// User exists, check the password
		$row = $result->fetch_assoc();
		$dbpass = $row['password'];
		
		// Verify the password
		if (password_verify($login_password, $dbpass)) {
			$_SESSION['login_user'] = $row['username']; // Set session variable after successful login
			echo json_encode(['success' => "Connected to: " . $row['username']]);
		} else {
			echo json_encode(['error' => "Your Login Name or Password is invalid"]);
		}
	}

	/*$existinguser_sql = "SELECT * FROM t_utente_2 WHERE email = '$login_email'";
	$result = mysqli_query($conn,$existinguser_sql);
	$count = mysqli_num_rows($result);
	if($count == 0) {
		echo("Creating Account");
		$sql = "INSERT INTO t_utente_2
				VALUES ('Mario', '$login_email', '$hashedPass')";

		if ($conn->query($sql) === TRUE) {
			echo "Account Created";
		} else {
			echo "Error: " . $sql . "<br>" . $conn->error;
		}
	}
	else {
		echo("Existing Email Address");
	}

	$sql = "SELECT * FROM t_utente_2 WHERE email = '$login_email'";   
	$result = mysqli_query($conn,$sql);
	$row = mysqli_num_rows($result);
	$count = mysqli_num_rows($result);
	if($count == 1) {
		while($row = mysqli_fetch_assoc($result)) {
			$dbpass = $row['password'];
			if (password_verify($login_password, $dbpass)) {
				$user = $row['username'];
				echo("Connected to: $user\n");
			}
			else {
				echo("Your Login Name or Password is invalid");
			}
		}
		$_SESSION['login_user'] = $login_email;
	} else {
		echo("Your Login Name or Password is invalid");
	}*/

	//echo("Hello from server: $login_email and $login_password");