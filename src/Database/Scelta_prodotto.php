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
        <input type="submit" value="Invia"></br>
        <?php $servername = "127.0.0.1";
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
        ?>
        <?php echo '1 maglietta' ?> </br>
        <?php echo '2 jeans' ?> </br>
        <?php echo '3 maglione' ?> </br> 
        <?php echo '4 intimo maschile' ?> </br>
        <?php echo '5 intimo femminile' ?> </br>
        <?php echo '6 body neonati' ?> </br>        

        <?php include 'C:\xampp\htdocs\DB_E-Commerce\Funzioni\Funzioni.php' ?>

        <?php   $maglietta = "maglietta";
                $jeans = "jeans";
                $maglione = "maglione";
                $intimoMaschile = "intimo maschile";
                $intimoFemminile = "intimo femminile";
                $bodyNeo = "body neonati"; 
                $numero_inserito = ""; ?>

        <?php $prodotto = new Scelta_prodotto($maglietta, $jeans, $maglione, $intimoMaschile, $intimoFemminile, $bodyNeo); ?>

        <?php $prodotto->sceltaProdotto($numero_inserito); ?>

    </form>
</body>

</html>