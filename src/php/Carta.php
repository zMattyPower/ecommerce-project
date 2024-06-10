<?php
header('Access-Control-Allow-Origin: http://localhost:8000/progetto_scuola');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

include "core.php";

$conn = connectDatabase();

$input = file_get_contents('php://input');
if (!$input) {
    error_log('Nessun input ricevuto.');
    die(json_encode(['error' => "Nessun input ricevuto."]));
}

$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    error_log('Errore nel decodificare il JSON: ' . json_last_error_msg());
    die(json_encode(['error' => "Errore nel decodificare il JSON: " . json_last_error_msg()]));
}

$carta_email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$carta_cardNumber = filter_var($data['n_carta'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_expiryDate = filter_var($data['scadenza'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cardHolder = filter_var($data['titolare'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_city = filter_var($data['citta'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_postalCode = filter_var($data['cap'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_address = filter_var($data['indirizzo'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_country = filter_var($data['nazionalita'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cvv = filter_var($data['cvv'], FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if (!$carta_email || !$carta_cardNumber || !$carta_expiryDate || !$carta_cardHolder || !$carta_city || !$carta_postalCode || !$carta_address || !$carta_country || !$carta_cvv) {
    error_log('Tutti i campi sono obbligatori.');
    die(json_encode(['error' => "Tutti i campi sono obbligatori."]));
}

$email_check_stmt = $conn->prepare("SELECT email FROM t_utente WHERE email = ?");
if (!$email_check_stmt) {
    error_log('Prepare failed: ' . $conn->error);
    die(json_encode(['error' => "Prepare failed: " . $conn->error]));
}
$email_check_stmt->bind_param("s", $carta_email);
$email_check_stmt->execute();
$email_check_stmt->store_result();

if ($email_check_stmt->num_rows == 0) {
    $email_check_stmt->close();
    error_log('L\'email non esiste nella tabella utenti!');
    echo json_encode(['error' => "L'email non esiste nella tabella utenti!"]);
} else {
    $email_check_stmt->close();

    $chck_stmt = $conn->prepare("SELECT * FROM t_carta_di_pagamento WHERE numero = ? AND email = ?");
    if (!$chck_stmt) {
        error_log('Prepare failed: ' . $conn->error);
        die(json_encode(['error' => "Prepare failed: " . $conn->error]));
    }
    $chck_stmt->bind_param("ss", $carta_cardNumber, $carta_email);
    $chck_stmt->execute();
    $chck_stmt->store_result();

    if ($chck_stmt->num_rows == 0) {
        $chck_stmt->close();

        $query = "INSERT INTO t_carta_di_pagamento (titolare, n_carta, scadenza, cvv, citta, cap, indirizzo, nazione, email) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($query);
        if (!$stmt) {
            error_log('Prepare failed: ' . $conn->error);
            die(json_encode(['error' => "Prepare failed: " . $conn->error]));
        }
        $stmt->bind_param("sssssssss", $carta_cardHolder, $carta_cardNumber, $carta_expiryDate, $carta_cvv, $carta_city, $carta_postalCode, $carta_address, $carta_country, $carta_email);

        if ($stmt->execute()) {
            error_log('Pagamento effettuato con successo.');
            echo json_encode(['success' => "Pagamento effettuato con successo."]);
        } else {
            error_log('Errore durante l\'inserimento dei dati: ' . $stmt->error);
            echo json_encode(['error' => "Errore durante l'inserimento dei dati: " . $stmt->error]);
        }
        $stmt->close();
    } else {
        $chck_stmt->close();
        error_log('Carta già esistente.');
        echo json_encode(['error' => "Carta già esistente."]);
    }
}

$conn->close();
?>
