import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/payment.jsx'
import CarrelloRecap from './pages/CarrelloRecap';
import GlobalVariables from './Components/GlobalVariables';
import React, { useState } from 'react';

//Link Page

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./Components/Account/Register";
import DonnaMagliette from './pages/DonnaMagliette';
import DonnaMaglietteP1_1 from "./pages/DonnaMaglietteP1_1";
import DonnaMaglietteP1_2 from "./pages/DonnaMagliettaP1_2.jsx";
import DonnaMaglietteP2_1 from "./pages/DonnaMagliettaP2_1.jsx";
import DonnaMaglietteP2_2 from "./pages/DonnaMagliettaP2_2";
import DonnaMaglietteP3_1 from "./pages/DonnaMagliettaP3_1.jsx";
import DonnaMaglietteP3_2 from "./pages/DonnaMagliettaP3_2.jsx";




import DonnaFelpe from './pages/DonnaFelpe';



import UomoMaglietta from "./pages/UomoMaglietta";
import BambinoMaglietta from "./pages/BambinoMaglietta";
import NeonatoMaglietta from "./pages/NeonatoMaglietta";
import Card from "./Components/Card/Card";

{/*import logo from "./logo.svg";*/ }

function App() {

  return (
    <div>

      <GlobalVariables>
        <Navbar />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/registrazione" element={<Register />} />
          <Route path="/Donna/Magliette" element={< DonnaMagliette />} />
          <Route path="/Donna/Magliette/P/1/_/1" element={< DonnaMaglietteP1_1 />} />
          <Route path="/Donna/Magliette/P/1/_/2" element={< DonnaMaglietteP1_2 />} />
          <Route path="/Donna/Magliette/P/2/_/1" element={< DonnaMaglietteP2_1 />} />
          <Route path="/Donna/Magliette/P/2/_/2" element={< DonnaMaglietteP2_2 />} />
          <Route path="/Donna/Magliette/P/3/_/1" element={< DonnaMaglietteP3_1 />} />
          <Route path="/Donna/Magliette/P/3/_/2" element={< DonnaMaglietteP3_2 />} />


          <Route path="/Donna/Felpe" element={< DonnaFelpe />} />

          <Route path="/Uomo/Maglietta" element={<UomoMaglietta />} />
          <Route path="/bambino/maglietta" element={<BambinoMaglietta />} />
          <Route path="/neonato/maglietta" element={<NeonatoMaglietta />} />
          <Route path="/CarrelloRecap" element={<CarrelloRecap />} />
          <Route path="/Payment" element={<Payment />} />
        </Routes>


        <Footer />
      </GlobalVariables>

    </div>
  );
}

export default App;
