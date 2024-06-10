<?php
header('Access-Control-Allow-Origin: http://localhost:8000/clothem');
header('Content-Type: application/json');

include "core.php";

$conn = connectDatabase();

$input = file_get_contents('php://input');
if (!$input) {
    die(json_encode(['error' => "Nessun input ricevuto."]));
}

$data = json_decode($input, true);
if (json_last_error() !== JSON_ERROR_NONE) {
    die(json_encode(['error' => "Errore nel decodificare il JSON: " . json_last_error_msg()]));
}

header('Access-Control-Allow-Origin: http://localhost:8000/clothem');
header('Content-Type: application/json');


$carta_email = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cardNumber = isset($_POST['n_carta']) ? filter_var($_POST['n_carta'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_expiryDate = isset($_POST['scadenza']) ? filter_var($_POST['scadenza'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cardHolder = isset($_POST['titolare']) ? filter_var($_POST['titolare'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_city = isset($_POST['citta']) ? filter_var($_POST['citta'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_postalCode = isset($_POST['cap']) ? filter_var($_POST['cap'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_address = isset($_POST['indirizzo']) ? filter_var($_POST['indirizzo'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_country = isset($_POST['nazionalita']) ? filter_var($_POST['nazionalita'], FILTER_SANITIZE_FULL_SPECIAL_CHARS) : null;
$carta_cvv = isset($_POST['cvv']) ? filter_var($_POST['cvv'], FILTER_SANITIZE_SPECIAL_CHARS) : null;

if (!$carta_email || !$carta_cardNumber || !$carta_expiryDate || !$carta_cardHolder || !$carta_city || !$carta_postalCode || !$carta_address || !$carta_country || !$carta_cvv) {
    die(json_encode(['error' => "Tutti i campi sono obbligatori."]));
}

// Verifica se l'email esiste nella tabella t_utente
$email_check_stmt = $conn->prepare("SELECT email FROM t_utente WHERE email = ?");
if (!$email_check_stmt) {
    die(json_encode(['error' => "Prepare failed: " . $conn->error]));
}
$email_check_stmt->bind_param("s", $carta_email);
$email_check_stmt->execute();
$email_check_stmt->store_result();

if ($email_check_stmt->num_rows == 0) {
    // L'email non esiste nella tabella t_utente
    $email_check_stmt->close();
    echo json_encode(['error' => "L'email non esiste nella tabella utenti!"]);
} else {
    // L'email esiste, procedi con l'inserimento della carta di pagamento
    $email_check_stmt->close();

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
}

$conn->close();
?>
