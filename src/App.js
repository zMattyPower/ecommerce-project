import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/payment'
import GlobalVariables from './Components/GlobalVariables';
import React, { useState } from 'react';

//Link Page

import Home from "./pages/Home";
import DonnaMaglietta from "./pages/DonnaMaglietta";
import UomoMaglietta from "./pages/UomoMaglietta";
import BambinoMaglietta from "./pages/BambinoMaglietta";
import NeonatoMaglietta from "./pages/NeonatoMaglietta";

import Tendina from "./Components/prova/Tendina";


function App() {
  return (
    <div>
      <GlobalVariables>     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/donna/maglietta" element={< DonnaMaglietta/>} />
          <Route path="/uomo/maglietta" element={<UomoMaglietta />} />
          <Route path="/bambino/maglietta" element={<BambinoMaglietta />} />
          <Route path="/neonato/maglietta" element={<NeonatoMaglietta />} />
        </Routes>
      </GlobalVariables>


     
    </div>
  );
}

export default App;
