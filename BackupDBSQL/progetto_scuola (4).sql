-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 06, 2024 alle 10:35
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `progetto_scuola`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `t_acquisto`
--

CREATE TABLE `t_acquisto` (
  `email` varchar(255) NOT NULL,
  `id_prodotto` int(4) NOT NULL,
  `id_acquisto` int(5) NOT NULL,
  `qualità` varchar(255) NOT NULL,
  `data_acquisto` date NOT NULL,
  `via` varchar(255) NOT NULL,
  `citta` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_carta_di_pagamento`
--

CREATE TABLE `t_carta_di_pagamento` (
  `email` varchar(255) NOT NULL,
  `numero` int(12) NOT NULL,
  `scadenza` date NOT NULL,
  `titolare` varchar(255) NOT NULL,
  `citta` varchar(255) NOT NULL,
  `cap` int(5) NOT NULL,
  `indirizzo` varchar(255) NOT NULL,
  `nazione` varchar(255) NOT NULL,
  `cvc` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_categoria`
--

CREATE TABLE `t_categoria` (
  `id_categoria` int(4) NOT NULL,
  `tipo_categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_categoria`
--

INSERT INTO `t_categoria` (`id_categoria`, `tipo_categoria`) VALUES
(1, 'felpe'),
(2, 'gonne e vestiti'),
(3, 'pantaloncini'),
(4, 'giacche'),
(5, 'camminata	'),
(6, 'corsa'),
(7, 'allenamento'),
(8, 'borse'),
(9, 'cappelli'),
(10, 'occhiali perche adriano non ci vede'),
(1234, 'magliette'),
(1235, 'pantaloni');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_dipendente`
--

CREATE TABLE `t_dipendente` (
  `id_dipendente` int(5) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `data_nascita` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_dipendente`
--

INSERT INTO `t_dipendente` (`id_dipendente`, `nome`, `cognome`, `data_nascita`) VALUES
(11111, 'Pippo', 'Baudo', '1980-12-12'),
(11112, 'Buongiorno', 'Mike', '1960-12-12');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_dipendete_prodotto`
--

CREATE TABLE `t_dipendete_prodotto` (
  `id_dipendente` int(5) NOT NULL,
  `id_prodotto` int(4) NOT NULL,
  `id_dip_prod` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_prodotto`
--

CREATE TABLE `t_prodotto` (
  `id_categoria` int(4) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `prezzo` float NOT NULL,
  `descrizione` varchar(255) NOT NULL,
  `id_prodotto` int(4) NOT NULL,
  `colore` varchar(255) NOT NULL,
  `taglia` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_prodotto`
--

INSERT INTO `t_prodotto` (`id_categoria`, `nome`, `prezzo`, `descrizione`, `id_prodotto`, `colore`, `taglia`) VALUES
(1234, 'maglietta', 12, 'giovannibuonasera', 1224, 'rosso', 's'),
(1235, 'pantalone', 12, 'giovannibuonasera', 1225, 'blu', 'm'),
(1234, 'maglietta', 12, 'giovannibuonasera', 1226, 'giallo', 'm');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_prod_cat`
--

CREATE TABLE `t_prod_cat` (
  `id_prod_cat` int(5) NOT NULL,
  `id_prodotto` int(4) NOT NULL,
  `id_categoria` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_ticket_reso`
--

CREATE TABLE `t_ticket_reso` (
  `id_ticket` int(5) NOT NULL,
  `id_acquisto` int(5) NOT NULL,
  `id_dip_prod` int(5) NOT NULL,
  `motivazione` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_utente`
--

CREATE TABLE `t_utente` (
  `email` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `data_nascita` date NOT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `consenso_trattamento` tinyint(4) NOT NULL,
  `cognome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_utente`
--

INSERT INTO `t_utente` (`email`, `nome`, `pass`, `data_nascita`, `telefono`, `consenso_trattamento`, `cognome`) VALUES
('adriano@studenti.it', 'Eduard', 'eduard', '2000-12-12', '3456871429', 0, 'Ene'),
('micole@studenti.it', 'Micole', 'micole', '2000-12-12', '3896458732', 0, 'Santos');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `t_acquisto`
--
ALTER TABLE `t_acquisto`
  ADD PRIMARY KEY (`id_acquisto`),
  ADD KEY `email` (`email`),
  ADD KEY `id_prodotto` (`id_prodotto`);

--
-- Indici per le tabelle `t_carta_di_pagamento`
--
ALTER TABLE `t_carta_di_pagamento`
  ADD PRIMARY KEY (`numero`),
  ADD KEY `email` (`email`);

--
-- Indici per le tabelle `t_categoria`
--
ALTER TABLE `t_categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indici per le tabelle `t_dipendente`
--
ALTER TABLE `t_dipendente`
  ADD PRIMARY KEY (`id_dipendente`);

--
-- Indici per le tabelle `t_dipendete_prodotto`
--
ALTER TABLE `t_dipendete_prodotto`
  ADD PRIMARY KEY (`id_dip_prod`),
  ADD KEY `id_dipendente` (`id_dipendente`),
  ADD KEY `id_prodotto` (`id_prodotto`);

--
-- Indici per le tabelle `t_prodotto`
--
ALTER TABLE `t_prodotto`
  ADD PRIMARY KEY (`id_prodotto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indici per le tabelle `t_prod_cat`
--
ALTER TABLE `t_prod_cat`
  ADD PRIMARY KEY (`id_prod_cat`),
  ADD UNIQUE KEY `id_prod_cat` (`id_prod_cat`),
  ADD KEY `id_prodotto` (`id_prodotto`),
  ADD KEY `id_categoria` (`id_categoria`);

--
-- Indici per le tabelle `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  ADD PRIMARY KEY (`id_ticket`),
  ADD KEY `id_acquisto` (`id_acquisto`),
  ADD KEY `id_dip_prod` (`id_dip_prod`);

--
-- Indici per le tabelle `t_utente`
--
ALTER TABLE `t_utente`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `t_dipendente`
--
ALTER TABLE `t_dipendente`
  MODIFY `id_dipendente` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11113;

--
-- AUTO_INCREMENT per la tabella `t_dipendete_prodotto`
--
ALTER TABLE `t_dipendete_prodotto`
  MODIFY `id_dip_prod` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_prod_cat`
--
ALTER TABLE `t_prod_cat`
  MODIFY `id_prod_cat` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  MODIFY `id_ticket` int(5) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `t_acquisto`
--
ALTER TABLE `t_acquisto`
  ADD CONSTRAINT `t_acquisto_ibfk_1` FOREIGN KEY (`email`) REFERENCES `t_utente` (`email`),
  ADD CONSTRAINT `t_acquisto_ibfk_2` FOREIGN KEY (`id_prodotto`) REFERENCES `t_prodotto` (`id_prodotto`);

--
-- Limiti per la tabella `t_carta_di_pagamento`
--
ALTER TABLE `t_carta_di_pagamento`
  ADD CONSTRAINT `t_carta_di_pagamento_ibfk_1` FOREIGN KEY (`email`) REFERENCES `t_utente` (`email`);

--
-- Limiti per la tabella `t_dipendete_prodotto`
--
ALTER TABLE `t_dipendete_prodotto`
  ADD CONSTRAINT `t_dipendete_prodotto_ibfk_1` FOREIGN KEY (`id_dipendente`) REFERENCES `t_dipendente` (`id_dipendente`),
  ADD CONSTRAINT `t_dipendete_prodotto_ibfk_2` FOREIGN KEY (`id_prodotto`) REFERENCES `t_prodotto` (`id_prodotto`);

--
-- Limiti per la tabella `t_prodotto`
--
ALTER TABLE `t_prodotto`
  ADD CONSTRAINT `t_prodotto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `t_categoria` (`id_categoria`);

--
-- Limiti per la tabella `t_prod_cat`
--
ALTER TABLE `t_prod_cat`
  ADD CONSTRAINT `t_prod_cat_ibfk_1` FOREIGN KEY (`id_prodotto`) REFERENCES `t_prodotto` (`id_prodotto`),
  ADD CONSTRAINT `t_prod_cat_ibfk_2` FOREIGN KEY (`id_categoria`) REFERENCES `t_categoria` (`id_categoria`);

--
-- Limiti per la tabella `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  ADD CONSTRAINT `t_ticket_reso_ibfk_1` FOREIGN KEY (`id_acquisto`) REFERENCES `t_acquisto` (`id_acquisto`),
  ADD CONSTRAINT `t_ticket_reso_ibfk_2` FOREIGN KEY (`id_dip_prod`) REFERENCES `t_dipendete_prodotto` (`id_dip_prod`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
