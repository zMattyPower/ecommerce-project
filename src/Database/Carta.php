<?php
header('Access-Control-Allow-Origin: http://localhost:8000/progetto_scuola');
header('Content-Type: application/json');

include_once "core.php";

$conn = connectDatabase();
if ($conn->connect_error) {
    die(json_encode(['error' => "Connection failed: " . $conn->connect_error]));
}

$carta_email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cardNumber = filter_input(INPUT_POST, 'cardNumber', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_expiryDate = filter_input(INPUT_POST, 'expiryDate', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cardHolder = filter_input(INPUT_POST, 'cardHolder', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_city = filter_input(INPUT_POST, 'city', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_postalCode = filter_input(INPUT_POST, 'postalCode', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_address = filter_input(INPUT_POST, 'address', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_country = filter_input(INPUT_POST, 'country', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cvv = filter_input(INPUT_POST, 'cvv', FILTER_SANITIZE_SPECIAL_CHARS);

// Verifica se la carta esiste già
$chck_stmt = $conn->prepare("SELECT * FROM t_carta_di_pagamento WHERE numero = ? AND email = ?");
if (!$chck_stmt) {
    die(json_encode(['error' => "Prepare failed: " . $conn->error]));
}
$chck_stmt->bind_param("ss", $carta_cardNumber, $carta_email);
$chck_stmt->execute();
$chck_stmt->store_result();

if ($chck_stmt->num_rows == 0) {
    // La carta non esiste, procedi con l'inserimento
    $chck_stmt->close();

    $query = "INSERT INTO t_carta_di_pagamento (titolare, numero, scadenza, cvc, citta, cap, indirizzo, nazione, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);
    if (!$stmt) {
        die(json_encode(['error' => "Prepare failed: " . $conn->error]));
    }
    $stmt->bind_param("sssssssss", $carta_cardHolder, $carta_cardNumber, $carta_expiryDate, $carta_cvv, $carta_city, $carta_postalCode, $carta_address, $carta_country, $carta_email);

    if ($stmt->execute()) {
        echo json_encode(['success' => "Pagamento effettuato con successo."]);
    } else {
        echo json_encode(['error' => "Errore durante l'inserimento dei dati: " . $stmt->error]);
    }
    $stmt->close();
} else {
    $chck_stmt->close();
    echo json_encode(['error' => "La carta esiste già!"]);
}

$conn->close();
?>
