<?php
/*
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";

// Connessione al database
$conn = mysqli_connect($servername, $username, $password);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

class Scelta_prodotto {
  public static string $maglietta;
  public static string $jeans;
  public static string $maglione;
  public static string $intimoMaschile;
  public static string $intimoFemminile;
  public static string $bodyNeo;

  public function __construct($maglietta, $jeans, $maglione, $intimoMaschile, $intimoFemminile, $bodyNeo) {
    self::$maglietta = $maglietta;
    self::$jeans = $jeans;
    self::$maglione = $maglione;
    self::$intimoMaschile = $intimoMaschile;
    self::$intimoFemminile = $intimoFemminile;
    self::$bodyNeo = $bodyNeo;
  }

  
  function sceltaProdotto($numero_inserito) {
      if ($numero_inserito > 0) {
          switch ($numero_inserito) {
              case 1:
                  echo 'Categoria ' . self::$maglietta . ' scelto.';
                  break;
              case 2:
                  echo 'Categoria ' . self::$jeans . ' scelto.';
                  break;
              case 3:
                  echo 'Categoria ' . self::$maglione . ' scelto.';
                  break;
              case 4:
                  echo 'Categoria ' . self::$intimoMaschile . ' scelto.';
                  break;
              case 5:
                  echo 'Categoria ' . self::$intimoFemminile . ' scelto.';
                  break;
              case 6:
                  echo 'Categoria ' . self::$bodyNeo . ' scelto.';
                  break;
              default:
                  echo 'Non hai scelto nessuna categoria, per favore scegline una.';
          }
      } else {
          echo 'Numero non valido. Per favore inserisci un numero tra 1 e 6.';
      }
  }
}

class SceltaTaglia {
    public static string $tagliaXS;
    public static string $tagliaS;
    public static string $tagliaM;
    public static string $tagliaL;
    public static string $tagliaXL;
    public static string $tagliaBambinoA;

    public function __construct($tagliaXS, $tagliaS, $tagliaM, $tagliaL, $tagliaXL, $tagliaBambinoA) {
      self::$tagliaXS = $tagliaXS;
      self::$tagliaS = $tagliaS;
      self::$tagliaM = $tagliaM;
      self::$tagliaL = $tagliaL;
      self::$tagliaXL = $tagliaXL;
      self::$tagliaBambinoA = $tagliaBambinoA;
    }

    public function sceltaTaglia($numero_inserito) {
        if ($numero_inserito > 0) {
            switch ($numero_inserito) {
                case 1:
                    echo 'Taglia ' . self::$tagliaXS . ' scelta.';
                    break;
                case 2:
                    echo 'Taglia ' . self::$tagliaS . ' scelta.';
                    break;
                case 3:
                    echo 'Taglia ' . self::$tagliaM . ' scelta.';
                    break;
                case 4:
                    echo 'Taglia ' . self::$tagliaL . ' scelta.';
                    break;
                case 5:
                    echo 'Taglia ' . self::$tagliaXL . ' scelta.';
                    break;
                case 6:
                    echo 'Taglia ' . self::$tagliaBambinoA . ' scelta.';
                    break;
                default:
                    echo 'Non hai scelto nessuna taglia, per favore scegline una.';
            }
        } else {
            echo 'Numero non valido. Per favore inserisci un numero tra 1 e 6.';
        }
    }
}

class SceltaColore {
    public static string $coloreRosso;
    public static string $coloreBlu;
    public static string $coloreNero;
    public static string $coloreBianco;
    public static string $coloreVerdeScuro;
    public static string $coloreBeige;

    public function __construct($coloreRosso, $coloreBlu, $coloreNero, $coloreBianco, $coloreVerdeScuro, $coloreBeige) {
      self::$coloreRosso = $coloreRosso;
      self::$coloreBlu = $coloreBlu;
      self::$coloreNero = $coloreNero;
      self::$coloreBianco = $coloreBianco;
      self::$coloreVerdeScuro = $coloreVerdeScuro;
      self::$coloreBeige = $coloreBeige;
    }

    public function sceltaColore($numero_inserito) {
        if ($numero_inserito > 0) {
            switch ($numero_inserito) {
                case 1:
                    echo 'Colore ' . self::$coloreRosso . ' scelto.';
                    break;
                case 2:
                    echo 'Colore ' . self::$coloreBlu . ' scelto.';
                    break;
                case 3:
                    echo 'Colore ' . self::$coloreNero . ' scelto.';
                    break;
                case 4:
                    echo 'Colore ' . self::$coloreBianco . ' scelto.';
                    break;
                case 5:
                    echo 'Colore ' . self::$coloreVerdeScuro . ' scelto.';
                    break;
                case 6:
                    echo 'Colore ' . self::$coloreBeige . ' scelto.';
                    break;
                default:
                    echo 'Non hai scelto nessun colore, per favore scegline uno.';
            }
        } else {
            echo 'Numero non valido. Per favore inserisci un numero tra 1 e 6.';
        }
    }
}
?>
*/