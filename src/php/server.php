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
	die("Connection failed: " . $conn->connect_error);
	}
	echo "Connected successfully";

	$login_email = mysqli_real_escape_string($conn,$_POST['email']);
	$login_password = mysqli_real_escape_string($conn,$_POST['password']);

	$sql = "SELECT * FROM t_utente WHERE email = '$login_email' and pass = '$login_password'";   
	$result = mysqli_query($conn,$sql);
	$row = mysqli_num_rows($result);
	$count = mysqli_num_rows($result);

	if($count == 1) {
	   $_SESSION['login_user'] = $login_email;
	} else {
		echo("test");
	   $error = "Your Login Name or Password is invalid";
	}
	
	echo("Hello from server: $login_email");