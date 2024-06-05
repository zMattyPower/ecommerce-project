<?php

include_once 'C:\Users\PC-A59\Documents\GitHub\ecommerce-project\src\Database\Funzioni\Connection.php';
//Connessione
mysqli_select_db($conn, $database);

// Controllo della connessione 
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

/* per poter inserire un nuovo prodotto bisogna avere la categoria

    //inserimento della categoria
    $sql = " INSERT INTO t_categoria (id_categoria, tipo_categoria) VALUES ();";
    
    
    //controllo dell'insermineto della categoria  
    if (mysqli_query($conn, $sql)) {
        echo "pantalone inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

*/

// Loop per inserire 10 magliette 
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('1234', 'maglietta', '12', 'giovannibuonasera', '1224', 'rosso', 's');";
    if (mysqli_query($conn, $sql)) {
        echo "Maglietta inserita correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);

// Loop per inserire 10 pantaloni 
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('1235', 'pantalone', '12', 'giovannibuonasera', '1225', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "pantalone inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);


//funzione per selezionare le magliette 
function selezionaMagliette($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'maglietta'";
    $result = mysqli_query($conn, $sql);
    
    $magliette = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $magliette[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $magliette;
  }
?>

