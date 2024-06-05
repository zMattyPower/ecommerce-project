<?php
header('Access-Control-Allow-Origin: http://localhost:3000');

include_once "core.php";

$conn = connectDatabase();

$carta_numero_carta = filter_input(INPUT_POST, 'numero_carta', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_scadenza = filter_input(INPUT_POST, 'scadenza', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_titolare = filter_input(INPUT_POST, 'titolare', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_citta = filter_input(INPUT_POST, 'citta', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cap = filter_input(INPUT_POST, 'cap', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_indirizzo = filter_input(INPUT_POST, 'indirizzo', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_nazione = filter_input(INPUT_POST, 'nazione', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$carta_cvc = filter_input(INPUT_POST,'cvc',FILTER_SANITIZE_SPECIAL_CHARS);
//fare controlli

?>