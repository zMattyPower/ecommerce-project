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
        <?php echo 'Scegli il tuo prodotto.' ?></br>
    </form>

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
        }   ?>

<?php   include 'C:\xampp\htdocs\DB_E-Commerce\Scelta_colore.php';
        include 'C:\xampp\htdocs\DB_E-Commerce\Scelta_taglia.php';
        include 'C:\xampp\htdocs\DB_E-Commerce\Scelta_prodotto.php';
?>

    <?php $prodotto->sceltaProdotto($numero_inserito); ?>
    <?php
    function sceltaProdotto($numero_inserito)
    {
        return $numero_inserito;
    }
    ?>

    <?php $taglia->sceltaTaglia($numero_inserito); ?>

    <?php
    function sceltaTaglia($numero_inserito)
    {
        return $numero_inserito;
    }
    ?>
  
    <?php $colore->sceltaColore($numero_inserito);?>
    
    <?php
    function sceltaColore($numero_inserito)
    {
        return $numero_inserito;
    }
    ?>
</body>

</html>