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
        <?php echo '1 maglietta' ?> </br>
        <?php echo '2 jeans' ?> </br>
        <?php echo '3 intimo maschile' ?> </br>
        <?php echo '4 intimo femminile' ?> </br>
        <?php echo '5 body neonati' ?> </br>
    </form>
</body>

</html>
<?php

class Scelta_prodotto
{

    public $maglietta = "XS";
    public $jeans = "S";
    public $maglione = "M";
    public $intimoMaschile = "L";
    public $intimoFemminile = "XL";
    public $bodyNeo = "bambino/a";

    public function __construct($maglietta, $jeans, $maglione, $intimoMaschile, $intimoFemminile, $bodyNeo)
    {
        $this->maglietta = $maglietta;
        $this->jeans = $jeans;
        $this->maglione = $maglione;
        $this->intimoMaschile = $intimoMaschile;
        $this->intimoFemminile = $intimoFemminile;
        $this->bodyNeo = $bodyNeo;
    }

    //Controllo del numero se compreso tra 1 e 6
    public function sceltaProdotto($numeroInserito)
    {
        echo $_POST['numero_inserito'];
        if (isset($_POST['numero_inserito']) && $_POST > 0) {
            $numeroInserito = $_POST['numero_inserito'];

            //Scelta colore in base al numero
            switch ($numeroInserito) {
                case 1:
                    echo 'Categoria ' . $this->maglietta . ' scelto.';
                    break;

                case 2:
                    echo 'Categoria ' . $this->jeans . ' scelto.';
                    break;

                case 3:
                    echo 'Categoria ' . $this->maglione . ' scelto.';
                    break;

                case 4:
                    echo 'Categoria ' . $this->intimoMaschile . ' scelto.';
                    break;

                case 5:
                    echo 'Categoria ' . $this->intimoFemminile . ' scelto.';
                    break;

                case 5:
                    echo 'Categoria ' . $this->bodyNeo . ' scelto.';
                    break;

                default:
                    echo 'Non hai scelto nessuna categoria, per favore scegline una.';
            }
        }
        echo 'ciao5943u85';
    }

}

?>