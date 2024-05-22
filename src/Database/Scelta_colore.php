<!DOCTYPE html>
<html lang="it">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
    <input type="text" name="numero_inserito"></br>
    <?php echo '1 colore Rosso' ?> </br>
    <?php echo '2 colore Rosso' ?> </br>
    <?php echo '3 colore Rosso' ?> </br>
    <?php echo '4 colore Rosso' ?> </br>
    <?php echo '5 colore Rosso' ?> </br>
    <?php echo 'Nessuna scelta colore bianco.' ?> </br>

    <input type="submit" value="Invia">
  </form>

</body>

</html>
<?php

class Scelta_colore extends Scelta_prodotto
{

  public $coloreRosso = "Rosso";
  public $coloreBlu = "Blu";
  public $coloreNero = "Nero";
  public $coloreBianco = "Bianco";
  public $coloreVerdeScuro = "Verde scuro";
  public $coloreBeige = "Beige";

  public function __construct($coloreRosso, $coloreBlu, $coloreNero, $coloreBianco, $coloreVerdeScuro, $coloreBeige)
  {
    $this->coloreRosso = $coloreRosso;
    $this->coloreBlu = $coloreBlu;
    $this->coloreNero = $coloreNero;
    $this->coloreBianco = $coloreBianco;
    $this->coloreVerdeScuro = $coloreVerdeScuro;
    $this->coloreBeige = $coloreBeige;
  }

  public function SceltaColore()
  {
    //Controllo del numero se compreso tra 1 e 6
    if (isset($_POST['numero_inserito']) && $_POST > 0) {
      $numeroInserito = $_POST['numero_inserito'];

      //Scelta colore in base al numero
      switch ($numeroInserito) {
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

        case 6:
          echo 'Colore ' . $this->coloreBeige . ' scelto.';
          break;

        default:
          echo 'Non hai scelto nessun colore, per favore scegline uno.';

          return $numeroInserito;
      }
    }
  }
}

?>