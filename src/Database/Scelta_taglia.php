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

        echo '1 taglia XS<br>';
        echo '2 taglia S<br>';
        echo '3 taglia M<br>';
        echo '4 taglia L<br>';
        echo '5 taglia XL<br>';
        echo '6 taglia bambino/a<br>';

        include 'C:\xampp\htdocs\DB_E-Commerce\Funzioni\Funzioni.php';

        Sceltataglia::$tagliaXS = "XS";
        Sceltataglia::$tagliaS = "S";
        Sceltataglia::$tagliaM = "M";
        Sceltataglia::$tagliaL = "L";
        Sceltataglia::$tagliaXL = "XL";
        Sceltataglia::$tagliaBambinoA = "bambino/a";

        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $numero_inserito = isset($_POST['numero_inserito']) ? (int)$_POST['numero_inserito'] : 0;

            $taglia = new SceltaTaglia("XS ", "S ", "M", "L", "XL", "bambino/a");

            $taglia->sceltaTaglia($numero_inserito);
        }
        ?>
    </form>
</body>

</html>
