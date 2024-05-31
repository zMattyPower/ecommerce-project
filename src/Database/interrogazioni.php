<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");

// Parametri per la connessione al database
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";

try {
    // Connessione al database
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ricezione dei dati dal corpo della richiesta
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data) {
        // Estrazione dei dati
        $name = $data['name'];
        $lastname = $data['lastname'];
        $email = $data['email'];
        $password = $data['password'];
        $d_nascita = $data['d_nascita'];
        $tel = $data['tel'];
        $trattamento = isset($data['trattamento']) && $data['trattamento'] == 'on' ? 1 : 0;

        // Preparazione della query di inserimento
        $stmt = $conn->prepare("INSERT INTO t_utente (email, nome, pass, data_nascita, telefono, consenso_trattamento, cognome) 
                                VALUES (:email, :nome, :pass, :data_nascita, :telefono, :consenso_trattamento, :cognome)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':nome', $name);
        $stmt->bindParam(':pass', $password);
        $stmt->bindParam(':data_nascita', $d_nascita);
        $stmt->bindParam(':telefono', $tel);
        $stmt->bindParam(':consenso_trattamento', $trattamento);
        $stmt->bindParam(':cognome', $lastname);

        // Esecuzione della query
        $stmt->execute();

        // Messaggio di successo
        echo json_encode(["message" => "Dati inseriti con successo"]);
    } else {
        echo json_encode(["message" => "Nessun dato ricevuto"]);
    }
} catch (PDOException $e) {
    // Messaggio di errore
    echo json_encode(["message" => "Errore: " . $e->getMessage()]);
}
?>
