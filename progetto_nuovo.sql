-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Giu 13, 2024 alle 13:28
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
CREATE DATABASE IF NOT EXISTS `progetto_scuola` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `progetto_scuola`;

-- --------------------------------------------------------

--
-- Struttura della tabella `sqlentity`
--

CREATE TABLE `sqlentity` (
  `id` int(11) NOT NULL,
  `student_department` varchar(255) DEFAULT NULL,
  `student_first_name` varchar(255) DEFAULT NULL,
  `student_grade` varchar(255) DEFAULT NULL,
  `student_last_name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tp_carta`
--

CREATE TABLE `tp_carta` (
  `email` varchar(255) NOT NULL,
  `numero` int(12) NOT NULL,
  `scadenza` date NOT NULL,
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(255) NOT NULL,
  `debito` tinyint(4) NOT NULL,
  `credito` tinyint(4) NOT NULL,
  `prepagata` tinyint(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_acquista`
--

CREATE TABLE `t_acquista` (
  `email` varchar(255) NOT NULL,
  `id_prodotto` int(4) NOT NULL,
  `id_acquisto` int(5) NOT NULL,
  `qualità` varchar(255) NOT NULL,
  `data_acquisto` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `t_categoria`
--

CREATE TABLE `t_categoria` (
  `id_categoria` int(4) NOT NULL,
  `tipo_categoria` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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
  `taglia` varchar(5) NOT NULL,
  `id_prodotto` int(4) NOT NULL
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
  `nome` varchar(255) NOT NULL,
  `cognome` varchar(100) NOT NULL,
  `email` varchar(255) NOT NULL,
  `pass` varchar(355) NOT NULL,
  `data_nascita` date DEFAULT NULL,
  `telefono` varchar(100) NOT NULL,
  `consenso_trattamento` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_utente`
--

INSERT INTO `t_utente` (`nome`, `cognome`, `email`, `pass`, `data_nascita`, `telefono`, `consenso_trattamento`) VALUES
('Daniele', '', 'daniele@gmail.com', 'ciao123', NULL, '', ''),
('Fabiano', '', 'fabiano@gmail.com', '$2y$10$5Cq5sps9tSIQB/A6uOBzrOJ2fHh4jUj43tvNAxv7o0M29q1mpyx/W', NULL, '', ''),
('Luca', '', 'luca@gmail.com', '$2y$10$8sJca.m6vD5d0Oa1DMkTUOvI7Q1xdCymol7ERhXd3YCJyjSEAUW/S', NULL, '', ''),
('Luigi', '', 'luigi@gmail.com', 'ciao123', NULL, '', ''),
('Mario', 'Rossi', 'mana@gmail.com', '$2y$10$kbHcQCJ/IUXW2DC4yeb4BueOcwKGCTCaPEV6r65mG7aUUTakjO1m2', '2003-06-06', '405495049', 'on'),
('mario', '', 'marco@gmail.com', '$2y$10$9btzOVFZ14BCGg7o1oXmgeTQbTbqWUCDqujewI.CI1q4YJiSBLlEi', NULL, '', ''),
('test', '', 'mario@gmail.com', 'jj', NULL, '', ''),
('Marta', '', 'marta@gmail.com', 'ciao123', NULL, '', ''),
('Mario', 'Rossi', 'matta@gmail.com', '$2y$10$Wx2g43tqiJ04lw39YhC1luoy8qC8Hzk4UbbSo3QIjMUk19MCmDp96', '2003-06-06', '405495049', 'on'),
('mario', '', 'mattia@gmail.com', '$2y$10$KXwOFNygF36Kf76QKjNkE.RIfCW7/Z3hcRtNXC1uz7tI7L01Nstka', NULL, '', '');

-- --------------------------------------------------------

--
-- Struttura della tabella `t_utente_3`
--

CREATE TABLE `t_utente_3` (
  `email` varchar(255) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `sesso` tinyint(4) DEFAULT NULL,
  `pass` varchar(255) NOT NULL,
  `data_nascita` date NOT NULL,
  `indirizzo` varchar(255) DEFAULT NULL,
  `citta` varchar(255) DEFAULT NULL,
  `provincia` varchar(2) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `consenso_trattamento` varchar(4) NOT NULL,
  `consenso_mail` tinyint(4) DEFAULT NULL,
  `tessera` tinyint(4) DEFAULT NULL,
  `cognome` varchar(255) NOT NULL,
  `numero` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `t_utente_3`
--

INSERT INTO `t_utente_3` (`email`, `nome`, `sesso`, `pass`, `data_nascita`, `indirizzo`, `citta`, `provincia`, `telefono`, `consenso_trattamento`, `consenso_mail`, `tessera`, `cognome`, `numero`) VALUES
('kk@fel.com', 'oko', NULL, 'kkok,', '8999-09-09', NULL, NULL, NULL, 'kok', '0', NULL, NULL, 'Rossi', ''),
('kkk@fel.com', 'oko', NULL, 'llok', '8999-09-09', NULL, NULL, NULL, 'kok', '0', NULL, NULL, 'Rossi', ''),
('kkkllal@fel.com', 'oko', NULL, 'llok', '8999-09-09', NULL, NULL, NULL, '99009', '0', NULL, NULL, 'Rossi', ''),
('kkklll@fel.com', 'oko', NULL, 'llok', '8999-09-09', NULL, NULL, NULL, '99009', '0', NULL, NULL, 'Rossi', ''),
('kkklllal@fel.com', 'oko', NULL, 'llok', '8999-09-09', NULL, NULL, NULL, '99009', 'on', NULL, NULL, 'Rossi', ''),
('luigi@gmail.com', 'k', NULL, 'okkko', '0090-09-09', NULL, NULL, NULL, '090', '0', NULL, NULL, 'Rossi', '0');

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `sqlentity`
--
ALTER TABLE `sqlentity`
  ADD PRIMARY KEY (`id`);

--
-- Indici per le tabelle `tp_carta`
--
ALTER TABLE `tp_carta`
  ADD PRIMARY KEY (`numero`),
  ADD KEY `email` (`email`);

--
-- Indici per le tabelle `t_acquista`
--
ALTER TABLE `t_acquista`
  ADD PRIMARY KEY (`id_acquisto`),
  ADD UNIQUE KEY `id_acquisto` (`id_acquisto`),
  ADD KEY `id_prodotto` (`id_prodotto`),
  ADD KEY `email` (`email`);

--
-- Indici per le tabelle `t_categoria`
--
ALTER TABLE `t_categoria`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `id_categoria` (`id_categoria`);

--
-- Indici per le tabelle `t_dipendente`
--
ALTER TABLE `t_dipendente`
  ADD PRIMARY KEY (`id_dipendente`),
  ADD UNIQUE KEY `id_dipendente` (`id_dipendente`);

--
-- Indici per le tabelle `t_dipendete_prodotto`
--
ALTER TABLE `t_dipendete_prodotto`
  ADD PRIMARY KEY (`id_dip_prod`),
  ADD UNIQUE KEY `id_dip_prod` (`id_dip_prod`),
  ADD KEY `id_dipendente` (`id_dipendente`),
  ADD KEY `id_prodotto` (`id_prodotto`);

--
-- Indici per le tabelle `t_prodotto`
--
ALTER TABLE `t_prodotto`
  ADD PRIMARY KEY (`id_prodotto`),
  ADD UNIQUE KEY `id_categoria` (`id_categoria`);

--
-- Indici per le tabelle `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  ADD PRIMARY KEY (`id_ticket`),
  ADD UNIQUE KEY `id_ticket` (`id_ticket`),
  ADD KEY `id_acquisto` (`id_acquisto`),
  ADD KEY `id_dip_prod` (`id_dip_prod`);

--
-- Indici per le tabelle `t_utente`
--
ALTER TABLE `t_utente`
  ADD PRIMARY KEY (`email`);

--
-- Indici per le tabelle `t_utente_3`
--
ALTER TABLE `t_utente_3`
  ADD PRIMARY KEY (`email`),
  ADD KEY `t_utente_ibfk_1` (`numero`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `sqlentity`
--
ALTER TABLE `sqlentity`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_acquista`
--
ALTER TABLE `t_acquista`
  MODIFY `id_acquisto` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_categoria`
--
ALTER TABLE `t_categoria`
  MODIFY `id_categoria` int(4) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_dipendente`
--
ALTER TABLE `t_dipendente`
  MODIFY `id_dipendente` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_dipendete_prodotto`
--
ALTER TABLE `t_dipendete_prodotto`
  MODIFY `id_dip_prod` int(5) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  MODIFY `id_ticket` int(5) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `tp_carta`
--
ALTER TABLE `tp_carta`
  ADD CONSTRAINT `tp_carta_ibfk_1` FOREIGN KEY (`email`) REFERENCES `t_utente_3` (`email`);

--
-- Limiti per la tabella `t_acquista`
--
ALTER TABLE `t_acquista`
  ADD CONSTRAINT `t_acquista_ibfk_1` FOREIGN KEY (`id_prodotto`) REFERENCES `t_prodotto` (`id_prodotto`),
  ADD CONSTRAINT `t_acquista_ibfk_2` FOREIGN KEY (`email`) REFERENCES `t_utente_3` (`email`);

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
-- Limiti per la tabella `t_ticket_reso`
--
ALTER TABLE `t_ticket_reso`
  ADD CONSTRAINT `t_ticket_reso_ibfk_1` FOREIGN KEY (`id_acquisto`) REFERENCES `t_acquista` (`id_acquisto`),
  ADD CONSTRAINT `t_ticket_reso_ibfk_2` FOREIGN KEY (`id_dip_prod`) REFERENCES `t_dipendete_prodotto` (`id_dip_prod`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
