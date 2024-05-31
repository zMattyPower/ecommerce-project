<?php
	header('Access-Control-Allow-Origin: http://localhost:3000');

	include "core.php";

	// Connecting to Database
	$conn = connectDatabase();

	// Gets the input from the login form
	$login_username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$login_password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

	// Makes a prepared statement
	$chck_stmt = makePreparedStatement($conn, "SELECT * FROM t_utente_2 WHERE email = ?", $login_email);
	
	if ($chck_stmt->num_rows == 0) {
		// User does not exist, proceed with registration
		$chck_stmt -> close();
		$hashedPass = password_hash($login_password, PASSWORD_DEFAULT); 

		$stmt = makePreparedStatement($conn, "INSERT INTO t_utente_2 (username, email, password) 
												VALUES (?, ?, ?)", $login_username, $login_email, $hashedPass);

		//$stmt->close();
		
		echo json_encode(['success' => "Registrato Correttamente"]);
	} else {
		$chck_stmt->close();
		echo json_encode(['error' => "L'utente esiste gia!"]);
	}

	$conn->close();