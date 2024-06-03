import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/payment'
import CarrelloRecap from './pages/CarrelloRecap';
import GlobalVariables from './Components/GlobalVariables';
import React, { useState } from 'react';

//Link Page

import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Register from "./Components/Account/Register";
import DonnaMagliette from './pages/DonnaMagliette';
import DonnaMaglietteP1_1 from "./pages/DonnaMaglietteP1_1";
//import DonnaMaglietteP2_1 from "./pages/DonnaMaglietteP2_1";
//import DonnaMaglietteP3_1 from "./pages/DonnaMaglietteP3_1";



import DonnaFelpe from './pages/DonnaFelpe';



import UomoMaglietta from "./pages/UomoMaglietta";
import BambinoMaglietta from "./pages/BambinoMaglietta";
import NeonatoMaglietta from "./pages/NeonatoMaglietta";
import Card  from "./Components/Card/Card";

{/*import logo from "./logo.svg";*/}

function App() {
  
  return (
    <div>
      
      <GlobalVariables> 
         <Navbar/>   
        <Routes>
          
          <Route path="/" element={<Home/>} />
          <Route path="/registrazione" element={<Register/>} />
          <Route path="/Donna/Magliette" element={< DonnaMagliette/>} />
          <Route path="/Donna/Magliette/P/1/_/1" element={< DonnaMaglietteP1_1/>} />
          {/*<Route path="/Donna/Magliette/P2_1" element={< DonnaMaglietteP2_1/>} />
          <Route path="/Donna/Magliette/P3_1" element={< DonnaMaglietteP3_1/>} />*/}


          <Route path="/Donna/Felpe" element={< DonnaFelpe/>} />

          <Route path="/Uomo/Maglietta" element={<UomoMaglietta />} />
          <Route path="/bambino/maglietta" element={<BambinoMaglietta />} />
          <Route path="/neonato/maglietta" element={<NeonatoMaglietta />} />
          <Route path="/CarrelloRecap" element={<CarrelloRecap/>} />
          <Route path="/Payment" element={<Payment/>} />
        </Routes>

      
        <Footer/>
      </GlobalVariables>
      
    </div>
  );
}

export default App;
