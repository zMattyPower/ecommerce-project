<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $database = "progetto_scuola";

    // Creazione connessione
    $conn = mysqli_connect($servername, $username, $password);

    // Controllo connessione
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        echo "Connected successfully";
    }

    // Include i file delle classi e delle funzioni
    include_once 'C:\xampp\htdocs\DB_E-Commerce\Scelta_colore.php';
    include_once 'C:\xampp\htdocs\DB_E-Commerce\Scelta_taglia.php';
    include_once 'C:\xampp\htdocs\DB_E-Commerce\Scelta_prodotto.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Controlla se è stato inviato un numero
        $numero_inserito = isset($_POST['numero_inserito']) ? (int)$_POST['numero_inserito'] : 0;

        // Esegue la scelta in base al numero inserito
        if ($numero_inserito > 0) {
            echo "<p>Numero inserito: $numero_inserito</p>";

            // Crea un'istanza della classe per la scelta del prodotto
            $prodotto = new Scelta_prodotto($maglietta, $jeans, $maglione, $intimoMaschile, $intimoFemminile, $bodyNeo);

            // Chiama il metodo per gestire la scelta del prodotto
            $prodotto->sceltaProdotto($numero_inserito);
            echo "<br>";

            // Crea un'istanza della classe per la scelta della taglia
            $taglia = new SceltaTaglia($tagliaXS, $tagliaS, $tagliaM, $tagliaL, $tagliaXL, $tagliaBambinoA);

            // Chiama il metodo per gestire la scelta della taglia
            $taglia->sceltaTaglia($numero_inserito);
            echo "<br>";

            // Crea un'istanza della classe per la scelta del colore
            $colore = new SceltaColore($coloreRosso, $coloreBlu, $coloreNero, $coloreBianco, $coloreVerdeScuro, $coloreBeige);

            // Chiama il metodo per gestire la scelta del colore
            $colore->sceltaColore($numero_inserito);
        } else {
            echo "Inserisci un numero valido";
        }
    }
    ?>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <input type="text" name="numero_inserito">
        <input type="submit" value="Invia">
    </form>
</body>

</html>
