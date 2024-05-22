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
        <?php echo '1 maglietta' ?> </br>
        <?php echo '2 jeans' ?> </br>
        <?php echo '3 intimo maschile' ?> </br>
        <?php echo '4 intimo femminile' ?> </br>
        <?php echo '5 body neonati' ?> </br>
    </form>

</body>

</html>

<?php
class Prodotto
{

    public function sceltaProdotto($numeroInserito)
    {
        return $numeroInserito;
    }

    public function sceltaTaglia($numeroInserito)
    {
        return $numeroInserito;
    }

    public function sceltaColore($numeroInserito)
    {
        return $numeroInserito;
    }
}

?>