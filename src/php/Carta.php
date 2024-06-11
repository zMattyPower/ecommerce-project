<?php
header('Access-Control-Allow-Origin: http://localhost:3000');


include "core.php";

$conn = connectDatabase();

$input = file_get_contents('php://input');
if (!$input) {
    die(json_encode(['error' => "Nessun input ricevuto."]));
}

$data = [];
parse_str($input, $data);

$carta_email = isset($data['email']) ? filter_var($data['email'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cardNumber = isset($data['numero']) ? filter_var($data['numero'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_expiryDate = isset($data['scadenza']) ? filter_var($data['scadenza'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cardHolder = isset($data['titolare']) ? filter_var($data['titolare'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_city = isset($data['citta']) ? filter_var($data['citta'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_postalCode = isset($data['cap']) ? filter_var($data['cap'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_address = isset($data['indirizzo']) ? filter_var($data['indirizzo'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_country = isset($data['nazionalita']) ? filter_var($data['nazionalita'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cvv = isset($data['cvv']) ? filter_var($data['cvv'], FILTER_SANITIZE_SPECIAL_CHARS) : null;

if (!$carta_email || !$carta_cardNumber || !$carta_expiryDate || !$carta_cardHolder || !$carta_city || !$carta_postalCode || !$carta_address || !$carta_country || !$carta_cvv) {
    die(json_encode(['error' => "Tutti i campi sono obbligatori."]));
}

$email_check_stmt = $conn->prepare("SELECT email FROM t_utente WHERE email = ?");
if (!$email_check_stmt) {
    die(json_encode(['error' => "Prepare failed: " . $conn->error]));
}
$email_check_stmt->bind_param("s", $carta_email);
$email_check_stmt->execute();
$email_check_stmt->store_result();

if ($email_check_stmt->num_rows == 0) {
    $email_check_stmt->close();
    echo json_encode(['error' => "L'email non esiste nella tabella utenti!"]);
} else {
    $email_check_stmt->close();

    $chck_stmt = $conn->prepare("SELECT * FROM t_carta_di_pagamento WHERE numero = ? AND email = ?");
    if (!$chck_stmt) {
        die(json_encode(['error' => "Prepare failed: " . $conn->error]));
    }
    $chck_stmt->bind_param("ss", $carta_cardNumber, $carta_email);
    $chck_stmt->execute();
    $chck_stmt->store_result();

    if ($chck_stmt->num_rows == 0) {
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
}

$conn->close();
?>
