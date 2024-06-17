<?php
header('Access-Control-Allow-Origin: http://localhost:8000/progetto_scuola');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
	
	include "core.php";

	// Connecting to Database
	$conn = connectDatabase();

	// Gets the input from the login form
	$login_nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_cognome = filter_input(INPUT_POST, 'cognome', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
	$login_password = filter_input(INPUT_POST, 'pass_r', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_nascita = filter_input(INPUT_POST, 'data_nascita', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_telefono = filter_input(INPUT_POST, 'telefono', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
	$login_trattamento = filter_input(INPUT_POST, 'trattamento', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

	// Makes a prepared statement
	$chck_stmt = makePreparedStatement($conn, "SELECT * FROM t_utente WHERE email = ?", $login_email);
	
	if ($chck_stmt->num_rows == 0) {
		// User does not exist, proceed with registration
		$chck_stmt -> close();
		$hashedPass = password_hash($login_password, PASSWORD_DEFAULT);

		$query = "INSERT INTO t_utente (nome, cognome, email, pass, data_nascita, telefono, consenso_trattamento) VALUES (?, ?, ?, ?, ?, ?, ?)";
		$stmt = $conn->prepare("$query");
        $stmt->bind_param("sssssss", $login_nome, $login_cognome, $login_email, $hashedPass, $login_nascita, $login_telefono, $login_trattamento);

        $stmt->execute();
        
        $result = $stmt->get_result();

		//$stmt->close();
		
		echo json_encode(['success' => "Registrato Correttamente"]);
	} else {
		$chck_stmt->close();
		echo json_encode(['error' => "L'utente esiste gia!"]);
	}

	$conn->close();