<?php
	header('Access-Control-Allow-Origin: http://localhost:8000/progetto_scuola');
	header('Content-Type: application/json');
	
	include "core.php";

	// Connecting to Database
	$conn = connectDatabase();

	// Gets the input from the login form
	$login_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$login_password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

	// Makes a prepared statement
	$chck_stmt = makePreparedStatement($conn, "SELECT * FROM t_utente WHERE email = ?", $login_email);

	if ($chck_stmt->num_rows == 0) {
		$chck_stmt->close();
		echo json_encode(['error' => "Email o Password Sbagliata"]);
	} else {
		// User exists, check the password
		$row = $chck_stmt->fetch_assoc();
		$dbpass = $row['pass'];
		$chck_stmt->close();
		
		// Verify the password
		if (password_verify($login_password, $dbpass)) {
			$_SESSION['login_user'] = $row['nome']; // Set session variable after successful login
			echo json_encode(['success' => "Connected to: " . $row['nome']]);
		} else {
			echo json_encode(['error' => "Email o Password Sbagliata"]);
		}
	}
	
	/*if ($chck_stmt->num_rows == 0) {
		// User does not exist, proceed with registration
		$chck_stmt -> close();
		$hashedPass = password_hash($login_password, PASSWORD_DEFAULT); 

		$stmt = makePreparedStatement($conn, "INSERT INTO t_utente_2 (username, email, password) 
												VALUES ('mario', ?, ?)", $login_email, $hashedPass);

		//$stmt->close();
		
		echo json_encode(['success' => "Registrato Correttamente"]);
	} else {
		$chck_stmt->close();
		echo json_encode(['error' => "L'utente esiste gia!"]);
	}*/

	$conn->close();