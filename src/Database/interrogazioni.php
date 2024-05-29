<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";

// Creazione connessione
/*$conn = mysqli_connect($servername, $username, $password);

// Controllo connessione
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
} else {
    echo "Connected successfully";
}

use LDAP\Result;

$sql = "SELECT id_categoria FROM t_prodotto";
$result = $conn -> mysqli_connect($sql);

if($result->num_rows>0){
    while($row=$result->fetch_assoc()){
        echo "id_categoria " . $row["id_categoria"] . "<br>";
    }
}else{
    echo "0 risultati";
}*/
try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    //impostate il metodo di errore
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connessione riuscita";
} catch (PDOException $e) {
    echo "Connessione fallita" . $e->getMessage();
}
//query
try {
    $stmt = $conn->prepare("SELECT id_categoria FROM t_prodotto");
    $stmt->execute();

    //impostate il fetch
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach ($stmt->fetchAll() as $row) {
        echo "id_categoria " . $row["id_categoria"] . "<br>";
    }
} catch (PDOException $e) {
    echo "Errore: " . $e->getMessage();
}

//query di inserimento 
try {
    //creazione della query dipendente
    $stmt = $conn->prepare("INSERT INTO t_dipendente (id_dipendente, nome, cognome, data_nascita) VALUES (:id_dipendente, :nome, :cognome, :data_nascita)");
    $stmt->bindParam(':id_dipendente', $id_dipendente);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':cognome', $cognome);
    $stmt->bindParam(':data_nascita', $data_nascita);

    //inserimento dei dati nella query
    $id_dipendente = '11112';
    $nome = 'Buongiorno';
    $cognome = 'Mike';
    $data_nascita = '1960-12-12';

    //esecuzuione della query
    $stmt->execute();

    //verifica dei dati
    echo "Dati inseriti con successo";
}catch(PDOException $e) {
    echo "Errore: " . $e->getMessage();
}

try{
    //creazione della query utente
    $stmt = $conn->prepare("INSERT INTO t_utente (email, nome, pass, data_nascita, telefono, consenso_trattamento, cognome) 
    VALUES (:email, :nome, :pass, :data_nascita, :telefono, :consenso_trattamento, :cognome)");
    $stmt->bindParam(':email', $email);
    $stmt->bindParam(':nome', $nome);
    $stmt->bindParam(':pass', $password);
    $stmt->bindParam(':data_nascita', $data_nascita);
    $stmt->bindParam(':telefono', $telefono);
    $stmt->bindParam(':consenso_trattamento', $trattamento);
    $stmt->bindParam(':cognome', $cognome);

    //inserimento dati prova nella query
    $email = 'micole@studenti.it';
    $nome = 'Micole';
    $password = 'micole';
    $data_nascita = '2000-12-12';   
    $telefono = '3896458732';
    $trattamento = 'true';
    $cognome = 'Santos';

    //esecuzuione della query
    $stmt->execute();

    //verifica dei dati
    echo "Dati inseriti con successo";
}catch(PDOException $e) {
    echo "Errore: " . $e->getMessage();
}
