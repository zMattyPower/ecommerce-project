<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";

class SceltaProdotto
{

    public String $maglietta;
    public String $jeans;
    public String $maglione;
    public String $intimoMaschile;
    public String $intimoFemminile;
    public String $bodyNeo;
    public int $numero_inserito;

    function __construct($maglietta, $jeans, $maglione, $intimoMaschile, $intimoFemminile, $bodyNeo)
    {
        $this->maglietta = $maglietta;
        $this->jeans = $jeans;
        $this->maglione = $maglione;
        $this->intimoMaschile = $intimoMaschile;
        $this->intimoFemminile = $intimoFemminile;
        $this->bodyNeo = $bodyNeo;
    }

    //Controllo del numero se compreso tra 1 e 6
    function sceltaProdotto($numero_inserito)
    {
        echo $_POST['numero_inserito'];
        if (isset($_POST['numero_inserito']) && $_POST > 0) {
            $numero_inserito = $_POST['numero_inserito'];

            //Scelta colore in base al numero
            switch ($numero_inserito) {
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

                case 6:
                    echo 'Categoria ' . $this->bodyNeo . ' scelto.';
                    break;

                default:
                    echo 'Non hai scelto nessuna categoria, per favore scegline una.';
            }
        }
        return $numero_inserito;
    }

}
