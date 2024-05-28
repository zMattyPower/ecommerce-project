<?php

$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";


//qui c'è lo switch della scelta del prodotto 
class Scelta_prodotto
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

                    //elimina la maglietta nel caso 1?
                        $maglietta_id = $_POST['maglietta_id'];
                    
                        $sql = "DELETE FROM magliette WHERE id = $maglietta_id";
                    
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

//qui c'è lo switch per la scelta della taglia
class SceltaTaglia 
{

    public String $tagliaXS;
    public String $tagliaS;
    public String $tagliaM;
    public String $tagliaL;
    public String $tagliaXL;
    public String $tagliaBambinoA;
    public int $numero_inserito;

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
        echo $_POST['numero_inserito'];
        if (isset($_POST['numero_inserito']) && $_POST > 0) {
          $numero_inserito = $_POST['numero_inserito'];

            //Scelta colore in base al numero
            switch ($numero_inserito) {
                case 1:
                    echo 'Taglia ' . $this->tagliaXS . ' scelta.';

                     //elimina la maglietta nel caso 1?
                     $taglia_id = $_POST['taglia_id'];
                    
                     $sql = "DELETE FROM taglia WHERE id = $taglia_id";


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

                case 6:
                    echo 'Taglia ' . $this->tagliaBambinoA . ' scelta.';
                    break;

                default:
                    echo 'Non hai scelto nessuna taglia, per favore scegline una.';

                
            }
        }
        return $numero_inserito;
    }
}
class SceltaColore
{

  public String $coloreRosso;
  public String $coloreBlu;
  public String $coloreNero;
  public String $coloreBianco;
  public String $coloreVerdeScuro;
  public String $coloreBeige;
  public int $numero_inserito;

  public function __construct($coloreRosso, $coloreBlu, $coloreNero, $coloreBianco, $coloreVerdeScuro, $coloreBeige)
  {
    $this->coloreRosso = $coloreRosso;
    $this->coloreBlu = $coloreBlu;
    $this->coloreNero = $coloreNero;
    $this->coloreBianco = $coloreBianco;
    $this->coloreVerdeScuro = $coloreVerdeScuro;
    $this->coloreBeige = $coloreBeige;
  }

//qui c'è lo switch per la scelta del colore
  public function SceltaColore($numero_inserito)
  {
    //Controllo del numero se compreso tra 1 e 6
    if (isset($_POST['numero_inserito']) && $_POST > 0) {
      $numero_inserito = $_POST['numero_inserito'];

      //Scelta colore in base al numero
      switch ($numero_inserito) {
        case 1:
          echo 'Colore ' . $this->coloreRosso . ' scelto.';
          break;

        case 2:
          echo 'Colore ' . $this->coloreBlu . ' scelto.';
          break;

        case 3:
          echo 'Colore ' . $this->coloreNero . ' scelto.';
          break;

        case 4:
          echo 'Colore ' . $this->coloreBianco . ' scelto.';
          break;

        case 5:
          echo 'Colore ' . $this->coloreVerdeScuro . ' scelto.';
          break;

        case 6:
          echo 'Colore ' . $this->coloreBeige . ' scelto.';
          break;

        default:
          echo 'Non hai scelto nessun colore, per favore scegline uno.';

      }
    }
    return $numero_inserito;
  }
}

