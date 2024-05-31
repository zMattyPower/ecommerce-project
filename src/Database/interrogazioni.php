<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

include_once 'C:\Users\PC-A59\Documents\GitHub\ecommerce-project\src\Database\Funzioni\Connection.php';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    
    // Ricezione dei dati dal corpo della richiesta
    $data = json_decode(file_get_contents('php://input'), true);

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
} catch (PDOException $e) {
    // Messaggio di errore
    echo json_encode(["message" => "Errore: " . $e->getMessage()]);
}

//query di inserimento 
try {

    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Ricezione dei dati dal corpo della richiesta
    $data = json_decode(file_get_contents('php://input'), true);

    // Estrazione dei dati
    $id_dipendente = $data['id_dipendente'];
    $nome = $data['nome'];
    $cognome = $data['cognome'];
    $data_nascita = $data['data_nascita'];
    $trattamento = isset($data['trattamento']) && $data['trattamento'] == 'on' ? 1 : 0;


    //creazione della query dipendente
    $stmt = $conn->prepare("INSERT INTO t_carta_di_pagamento (email, numero, scadenza, nome, cognome, debito, credito, prepagata) 
                            VALUES (:email, :numero, ;scadenza, :nome, :cognome, debito, credito, prepagata)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':numero', $numero);
    $stmt->bindParam(':scadenza', $scadenza);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':cognome', $cognome);
    $stmt->bindParam(':debito', $debito);
    $stmt->bindParam(':credito', $credito);
    $stmt->bindParam(':prepagata', $prepagata);

    //esecuzuione della query
    $stmt->execute();

    //verifica dei dati
    echo "Dati inseriti con successo";
}catch(PDOException $e) {
    echo "Errore: " . $e->getMessage();
}
?>
