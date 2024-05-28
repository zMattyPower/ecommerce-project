import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/payment'
import GlobalVariables from './Components/GlobalVariables';
import React, { useState } from 'react';

//Link Page

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./Components/Account/Register";
import DonnaMaglietta from "./pages/DonnaMaglietta";
import UomoMaglietta from "./pages/UomoMaglietta";
import BambinoMaglietta from "./pages/BambinoMaglietta";
import NeonatoMaglietta from "./pages/NeonatoMaglietta";


function App() {
  return (
    <div>
      <GlobalVariables>     
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/registrazione" element={<Register/>} />
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
