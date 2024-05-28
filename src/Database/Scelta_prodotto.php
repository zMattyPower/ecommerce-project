<!DOCTYPE html>
<html lang="it">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
        <input type="text" name="numero_inserito">
        <input type="submit" value="Invia"><br>

        <?php
        // Dettagli del database
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
            echo "Connected successfully<br>";
        }

        echo '1 maglietta<br>';
        echo '2 jeans<br>';
        echo '3 maglione<br>';
        echo '4 intimo maschile<br>';
        echo '5 intimo femminile<br>';
        echo '6 body neonati<br>';

        include_once 'C:\xampp\htdocs\DB_E-Commerce\Funzioni\Funzioni.php';

        Scelta_prodotto::$maglietta = "maglietta";
        Scelta_prodotto::$jeans = "jeans";
        Scelta_prodotto::$maglione = "maglione";
        Scelta_prodotto::$intimoMaschile = "intimo maschile";
        Scelta_prodotto::$intimoFemminile = "intimo femminile";
        Scelta_prodotto::$bodyNeo = "body neonati";

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $numero_inserito = isset($_POST['numero_inserito']) ? (int)$_POST['numero_inserito'] : 0;

            //$prodotto = new Scelta_prodotto("maglietta ", "jeans ", "maglione ", "intimo maschile ", "intimo femminile ", "body neonati");

            Scelta_prodotto::sceltaProdotto($numero_inserito);

            //$prodotto->sceltaProdotto($numero_inserito);
        }
        ?>
    </form>
</body>

</html>