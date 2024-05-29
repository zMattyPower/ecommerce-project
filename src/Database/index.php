<?php
$servername = "127.0.0.1";
$username = "root";
$password = "";
$database = "progetto_scuola";


// Creazione connessione
$conn = mysqli_connect($servername, $username, $password);

// Controllo connessione
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}else{
echo "Connected successfully";
}

mysqli_select_db($conn, $database);

//$sql = "CREATE DATABASE Progetto_Scuola";
//if ($conn->query($sql) === TRUE) {
//    echo "Database creato con successo :) ";
//} else {
//    echo "Database non creato :'( " . $conn->error;
//}

//Creazione tabella utente
$sql = "CREATE TABLE t_utente (
    email varchar(255) NOT NULL UNIQUE,
    nome varchar(255) NOT NULL,
    pass varchar(255) NOT NULL,
    data_nascita date NOT NULL,
    telefono varchar(10) DEFAULT NULL,
    consenso_trattamento tinyint(4) NOT NULL,
    cognome varchar(255) NOT NULL,
    PRIMARY KEY (email)
);";

if ($conn->query($sql) === TRUE) {
    echo "Tabella utente creata con successo";
} else {
    echo "Errore creazione tabella utente: " . $conn->error;
}

//Creazione tabella carta
$sql = "CREATE TABLE t_carta_di_pagamento (
    email varchar(255) NOT NULL,
    numero int(12) NOT NULL,
    scadenza date NOT NULL,
    nome varchar(255) NOT NULL,
    cognome varchar(255) NOT NULL,
    debito tinyint(4) NOT NULL,
    credito tinyint(4) NOT NULL,
    prepagata tinyint(4) NOT NULL,
    PRIMARY KEY (numero),
    FOREIGN KEY (email) REFERENCES t_utente(email)
);";

if ($conn->query($sql) === TRUE) {
    echo "Tabella carta creata con successo";
} else {
    echo "Errore creazione tabella carta: " . $conn->error;
}

//Creazione tabella categoria
$sql = "CREATE TABLE t_categoria (
    id_categoria int(4) NOT NULL,
    tipo_categoria varchar(255) NOT NULL,
    PRIMARY KEY (id_categoria)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella categoria creata con successo";
} else {
    echo "Errore creazione tabella categoria: " . $conn->error;
}

//Creazione tabella prodotto
$sql = "CREATE TABLE t_prodotto (
    id_categoria int(4) NOT NULL,
    nome varchar(255) NOT NULL,
    prezzo float NOT NULL,
    descrizione varchar(255) NOT NULL,
    id_prodotto int(4) NOT NULL,
    PRIMARY KEY (id_prodotto),
    FOREIGN KEY (id_categoria) REFERENCES t_categoria(id_categoria)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella prodotto creata con successo";
} else {
    echo "Errore creazione tabella prodotto: " . $conn->error;
}

//Creazione tabella acquista
$sql = "CREATE TABLE t_acquisto (
    email varchar(255) NOT NULL,
    id_prodotto int(4) NOT NULL,
    id_acquisto int(5) NOT NULL,
    qualità varchar(255) NOT NULL,
    data_acquisto date NOT NULL,
    via varchar(255) NOT NULL,
    citta varchar(255) NOT NULL,
    PRIMARY KEY (id_acquisto),
    FOREIGN KEY (email) REFERENCES t_utente(email),
    FOREIGN KEY (id_prodotto) REFERENCES t_prodotto(id_prodotto)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella acquista creata con successo";
} else {
    echo "Errore creazione tabella acquista: " . $conn->error;
}

//Creazione tabella dipendente
$sql = "CREATE TABLE t_dipendente (
    id_dipendente int(5) NOT NULL AUTO_INCREMENT,
    nome varchar(255) NOT NULL,
    cognome varchar(255) NOT NULL,
    data_nascita date NOT NULL,
    PRIMARY KEY (id_dipendente)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella dipendente creata con successo";
} else {
    echo "Errore creazione tabella dipendente: " . $conn->error;
}

//Creazione tabella dipendente_prodotto
$sql = "CREATE TABLE t_dipendete_prodotto (
    id_dipendente int(5) NOT NULL,
    id_prodotto int(4) NOT NULL,
    id_dip_prod int(5) NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id_dip_prod),
    FOREIGN KEY (id_dipendente) REFERENCES t_dipendente(id_dipendente),
    FOREIGN KEY (id_prodotto) REFERENCES t_prodotto(id_prodotto)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella dipendente_prodotto creata con successo";
} else {
    echo "Errore creazione tabella dipendente_prodotto: " . $conn->error;
}

//Creazione tabella ticket reso
$sql = "CREATE TABLE t_ticket_reso (
    id_ticket int(5) NOT NULL AUTO_INCREMENT,
    id_acquisto int(5) NOT NULL,
    id_dip_prod int(5) NOT NULL,
    motivazione varchar(255) NOT NULL,
    PRIMARY KEY (id_ticket),
    FOREIGN KEY (id_acquisto) REFERENCES t_acquisto(id_acquisto),
    FOREIGN KEY (id_dip_prod) REFERENCES t_dipendete_prodotto(id_dip_prod)
  );";

if ($conn->query($sql) === TRUE) {
    echo "Tabella ticket reso creata con successo";
} else {
    echo "Errore creazione tabella ticket reso: " . $conn->error;
}
//Creazione tabella prodotto categoria
$sql = "CREATE TABLE t_prod_cat (
    id_prod_cat int(5) NOT NULL UNIQUE AUTO_INCREMENT,
    id_prodotto int(4) NOT NULL,
    id_categoria int(4) NOT NULL,
    PRIMARY KEY (id_prod_cat),
    FOREIGN KEY (id_prodotto) REFERENCES t_prodotto (id_prodotto),
    FOREIGN KEY (id_categoria) REFERENCES t_categoria (id_categoria)
);";

if ($conn->query($sql) === TRUE) {
    echo "Tabella prodotto categoria creata con successo";
} else {
    echo "Errore creazione tabella prodotto categoria: " . $conn->error;
}

//Creazione tabella taglia 
$sql = "CREATE TABLE t_taglia(
    id_taglia int(4) NOT NULL UNIQUE AUTO_INCREMENT,
    id_prodotto int(4) NOT NULL,
    taglia varchar(255) NOT NULL,
    prezzo_offerta float NOT NULL,
    PRIMARY KEY (id_taglia),
    FOREIGN KEY (id_prodotto) REFERENCES t_prodotto (id_prodotto)
);";

if ($conn->query($sql) === TRUE) {
    echo "Tabella taglia creata con successo";
} else {
    echo "Errore creazione tabella taglia: " . $conn->error;
}


//Creazione tabella colore  
$sql = "CREATE TABLE t_colore(
    id_colore int(4) NOT NULL UNIQUE AUTO_INCREMENT,
    id_prodotto int(4) NOT NULL,
    colore varchar(255) NOT NULL,
    prezzo_offerta float NOT NULL,
    PRIMARY KEY (id_colore),
    FOREIGN KEY (id_prodotto) REFERENCES t_prodotto (id_prodotto)
);";

if ($conn->query($sql) === TRUE) {
    echo "Tabella colore creata con successo";
} else {
    echo "Errore creazione tabella colore: " . $conn->error;
}

$conn->close();

?>