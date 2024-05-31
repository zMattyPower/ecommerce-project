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
        $nome = $data['nome'];
        $cognome = $data['cognome'];
        $email = $data['email'];
        $pass = $data['pass'];
        $data_nascita = $data['data_nascita'];
        $telefono = $data['telefono'];
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

try {
    // Connessione al database
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ricezione dei dati dal corpo della richiesta
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data) {
        // Estrazione dei dati
        $email = $data['email'];  
        $numero = $data['numero'];      
        $scadenza = $data['scadenza'];
        $nome = $data['nome'];
        $cognome = $data['cognome'];
        $debito = $debito['debito'];
        $credito = $credito['credito'];
        $prepagata = $prepagata['prepagata'];
        
        // Preparazione della query di inserimento
        $stmt = $conn->prepare("INSERT INTO t_utente (email, numero, scadenza, nome, cognome, debito, credito, prepagata) 
                                VALUES (:email, :numero, :scadenza, :nome, :cognome, :debito , :credito, :prepagata)");
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':numero', $numero);
        $stmt->bindParam(':scadenza', $scadenza);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':cognome', $cognome);
        $stmt->bindParam(':debito', $debito);
        $stmt->bindParam(':credito', $credito);
        $stmt->bindParam(':prepagata', $prepagata);

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
