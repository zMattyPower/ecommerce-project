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
        <?php echo '1 taglia XS' ?> </br>
        <?php echo '2 taglia S' ?> </br>
        <?php echo '3 taglia M' ?> </br>
        <?php echo '4 taglai L' ?> </br>
        <?php echo '5 taglia bambino/a' ?> </br>
    </form>

</body>

</html>
<?php

class Scelta_taglia extends Scelta_prodotto
{

    public $tagliaXS = "XS";
    public $tagliaS = "S";
    public $tagliaM = "M";
    public $tagliaL = "L";
    public $tagliaXL = "XL";
    public $tagliaBambinoA = "bambino/a";

    public function __construct($tagliaXS, $tagliaS, $tagliaM, $tagliaL, $tagliaXL, $tagliaBambinoA)
    {
        $this->tagliaXS = $tagliaXS;
        $this->tagliaS = $tagliaS;
        $this->tagliaM = $tagliaM;
        $this->tagliaL = $tagliaL;
        $this->tagliaXL = $tagliaXL;
        $this->tagliaBambinoA = $tagliaBambinoA;
    }

    public function sceltaTaglia()
    {
        //Controllo del numero se compreso tra 1 e 6
        if (isset($_POST['numero_inserito']) && $_POST > 0) {
            $numeroInserito = $_POST['numero_inserito'];

            //Scelta colore in base al numero
            switch ($numeroInserito) {
                case 1:
                    echo 'Taglia ' . $this->tagliaXS . ' scelta.';
                    break;

                case 2:
                    echo 'Taglia ' . $this->tagliaS . ' scelta.';
                    break;

                case 3:
                    echo 'Taglia ' . $this->tagliaM . ' scelta.';
                    break;

                case 4:
                    echo 'Taglia ' . $this->tagliaL . ' scelta.';
                    break;

                case 5:
                    echo 'Taglia ' . $this->tagliaXL . ' scelta.';
                    break;

                case 5:
                    echo 'Taglia ' . $this->tagliaBambinoA . ' scelta.';
                    break;

                default:
                    echo 'Non hai scelto nessuna taglai, per favore scegline una.';

                    return $numeroInserito;
            }
        }
    }
}

?>