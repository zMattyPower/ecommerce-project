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


// Loop per inserire 10 felpe
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0001', 'felpa', '12', 'giovannibuonasera', '0001', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "felpa inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);


// Loop per inserire 10 gonne e vestiti
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0002', 'gonne e vestiti', '12', 'giovannibuonasera', '0002', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "gonne e vestiti inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 pantaloncini
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0003', 'pantaloncini', '12', 'giovannibuonasera', '0003', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "pantaloncino inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 giacche
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0004', 'giacche', '12', 'giovannibuonasera', '0004', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "pantaloncino inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 sCamminata
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0005', 'camminata', '12', 'giovannibuonasera', '0005', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "sCamminata inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);


// Loop per inserire 10 sCorsa
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0006', 'corsa', '12', 'giovannibuonasera', '0006', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "sCorsa inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 sAllenamento
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0007', 'allenamento', '12', 'giovannibuonasera', '0007', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "sAllenamento inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 borsa
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0008', 'borsa', '12', 'giovannibuonasera', '0008', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "borsa inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);



// Loop per inserire 10 cappelli
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0009', 'cappelli', '12', 'giovannibuonasera', '0009', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "borsa inserito correttamente";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }
}

//mysqli_close($conn);




// Loop per inserire 10 occhiali
for ($i = 0; $i < 10; $i++) {
    $sql = "INSERT INTO t_prodotto (id_categoria, nome, prezzo, descrizione, id_prodotto, colore, taglia) VALUES ('0010', 'occhiali', '12', 'giovannibuonasera', '0010', 'blu', 'm')";
    if (mysqli_query($conn, $sql)) {
        echo "occhiali inserito correttamente";
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


//funzione per selezionare i pantaloni
function selezionaPantaloni($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'pantaloni'";
    $result = mysqli_query($conn, $sql);
    
    $pantaloni = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $felpe[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $pantaloni;
}
 
//funzione per selezionare le felpe
function selezionaFelpe($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'felpe'";
    $result = mysqli_query($conn, $sql);
    
    $felpe = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $felpe[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $felpe;
}


//funzione per selezionare per gonne e vestiti
function selezionaGonne($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'gonne e vestiti'";
    $result = mysqli_query($conn, $sql);
    
    $gonne = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $gonne[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $gonne;
}


//funzione per selezionare per i pantaloncini
function selezionaPantaloncini($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'pantaloncini'";
    $result = mysqli_query($conn, $sql);
    
    $pantaloncini = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $pantaloncini[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $pantaloncini;
}


//funzione per selezionare le giacche
function selezionaGiacche($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'giacche'";
    $result = mysqli_query($conn, $sql);
    
    $giacche = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $giacche[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $giacche;
}



//funzione per selezionare le sCamminata
function selezionaCamminata($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'camminata'";
    $result = mysqli_query($conn, $sql);
    
    $camminata = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $camminata[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $camminata;
}


//funzione per selezionare le sCorsa
function selezionaCorsa($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'corsa'";
    $result = mysqli_query($conn, $sql);
    
    $corsa = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $corsa[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $corsa;
}


//funzione per selezionare le sAllenamento
function selezionaAllenamento($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'allenamento'";
    $result = mysqli_query($conn, $sql);
    
    $allenamento = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $allenamento[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $allenamento;
}


//funzione per selezionare le borse
function selezionaBorse($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'borse'";
    $result = mysqli_query($conn, $sql);
    
    $borse = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $borse[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $borse;
}


//funzione per selezionare le cappelli
function selezionaCappelli($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'cappelli'";
    $result = mysqli_query($conn, $sql);
    
    $cappelli = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $cappelli[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $cappelli;
}


//funzione per selezionare le Occhiali
function selezionaOcchiali($conn) {
    $sql = "SELECT * FROM t_prodotto WHERE nome = 'occhiali'";
    $result = mysqli_query($conn, $sql);
    
    $occhiali = array();
    
    if (mysqli_num_rows($result) > 0) {
      while($row = mysqli_fetch_assoc($result)) {
        $occhiali[] = array(
          'id_prodotto' => $row['id_prodotto'],
          'nome' => $row['nome'],
          'prezzo' => $row['prezzo'],
          'descrizione' => $row['descrizione'],
          'colore' => $row['colore'],
          'taglia' => $row['taglia']
        );
      }
    }
    
    return $occhiali;
}





?>

