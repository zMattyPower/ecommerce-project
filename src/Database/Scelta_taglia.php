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
        ?>

        
        <?php
        $conn = mysqli_connect($servername, $username, $password);

        // Controllo connessione
        if (!$conn) {
            die("Connection failed: " . mysqli_connect_error());
        } else {
            echo "Connected successfully";
        }
        ?>

        <?php echo '1 taglia XS' ?> </br>
        <?php echo '2 taglia S' ?> </br>
        <?php echo '3 taglia M' ?> </br>
        <?php echo '4 taglai L' ?> </br>
        <?php echo '5 taglai XL' ?> </br>
        <?php echo '6 taglia bambino/a' ?> </br>
        

        <?php include 'C:\xampp\htdocs\DB_E-Commerce\Funzioni\Funzioni.php' ?>

        <?php   $tagliaXS = "XS";
                $tagliaS = "S";
                $tagliaM = "M";
                $tagliaL = "L";
                $tagliaXL = "XL";
                $tagliaBambinoA = "bambino/a";
                $numero_inserito = "";
        ?>

        <?php $taglia = new SceltaTaglia($tagliaXS, $tagliaS, $tagliaM, $tagliaL, $tagliaXL, $tagliaBambinoA); ?>

        <?php $taglia->sceltaTaglia($numero_inserito); ?>
    </form>

</body>

</html>
<?php 
 /* lascio così nel caso di modifiche 
class SceltaTaglia 
{

    public $tagliaXS;
    public $tagliaS;
    public $tagliaM;
    public $tagliaL;
    public $tagliaXL;
    public $tagliaBambinoA;

    public function __construct($tagliaXS, $tagliaS, $tagliaM, $tagliaL, $tagliaXL, $tagliaBambinoA)
    {
        $this->tagliaXS = $tagliaXS;
        $this->tagliaS = $tagliaS;
        $this->tagliaM = $tagliaM;
        $this->tagliaL = $tagliaL;
        $this->tagliaXL = $tagliaXL;
        $this->tagliaBambinoA = $tagliaBambinoA;
    }


    //Controllo del numero se compreso tra 1 e 6
    public function sceltaTaglia($numero_inserito)
    {
        echo $_POST['$numero_inserito'];
        if (isset($_POST['numero_inserito']) && $_POST > 0) {
            $numeroInserito = $_POST['numero_inserito'];

            //Scelta colore in base al numero
            switch ($numeroInserito) {
                case 1:
                    echo 'Taglia ' . $this->tagliaXS . ' scelta.';

                     //elimina la maglietta nel caso 1?
                     $maglietta_id = $_POST['maglietta_id'];
                    
                     $sql = "DELETE FROM magliette WHERE id = $maglietta_id";


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
                    echo 'Non hai scelto nessuna taglia, per favore scegline una.';

                    return $numeroInserito;
            }
        }
    }
}
?>
*/
