<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "d_ecommerce_project";

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
try{
    $conn = new PDO("mysql:host=$servername;dbname=$database",$username,$password);
    //impostate il metodo di errore
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connessione riuscita";
} catch(PDOException $e) {
    echo "Connessione fallita" . $e->getMessage();
}
//query
try{
    $stmt = $conn->prepare("SELECT id_categoria FROM t_prodotto");
    $stmt->execute();

    //impostate il fetch
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    foreach($stmt->fetchAll()as $row) {
        echo "id_categoria " . $row["id_categoria"] . "<br>";
    }
}catch(PDOException $e) {
    echo "Errore: " . $e->getMessage();
}