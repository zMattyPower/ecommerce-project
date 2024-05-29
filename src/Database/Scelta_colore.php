<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <input type="text" name="numero_inserito"><br>
    <input type="submit" value="Invia"><br>

    <?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $database = "progetto_scuola";

    // Connessione al database
    $conn = mysqli_connect($servername, $username, $password);
    if (!$conn) {
      die("Connection failed: " . mysqli_connect_error());
    } else {
      echo "Connected successfully<br>";
    }

    echo '1 colore rosso<br>';
    echo '2 colore blu<br>';
    echo '3 colore nero<br>';
    echo '4 colore bianco<br>';
    echo '5 colore verde scuro<br>';
    echo '6 colore beige<br>';

    include 'C:\xampp\htdocs\DB_E-Commerce\Funzioni\Funzioni.php';

    Sceltacolore::$coloreRosso = "rosso";
    Sceltacolore::$coloreBlu = "blu";
    Sceltacolore::$coloreNero = "nero";
    Sceltacolore::$coloreBianco = "bianco";
    Sceltacolore::$coloreVerdeScuro = "verde scuro";
    Sceltacolore::$coloreBeige = "beige";

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
      $numero_inserito = isset($_POST['numero_inserito']) ? (int)$_POST['numero_inserito'] : 0;

      $colore = new SceltaColore("rosso ", "blu ", "nero ", "bianco ", "verde scuro ", "beige ");

      $colore->sceltaColore($numero_inserito);
    }
    ?>
  </form>
</body>

</html>