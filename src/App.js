import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'
import Payment from './Components/Payment/payment'
import GlobalVariables from './Components/GlobalVariables';
import React, { useState } from 'react';

//Link Page
import { Route, Routes } from 'react-router-dom';
import Donna from "./pages/Donna";
import Uomo from "./pages/Uomo";
import Bambino from "./pages/Bambino";

function App() {
  return (
    <div>
      <GlobalVariables>
        <Navbar/>
        <Payment/>
      </GlobalVariables>
      <Routes>
        <Route path="/Donna" element={<Donna />} />
        <Route path="/Uomo" element={<Uomo />} />
        <Route path="/Bambino" element={<Bambino/>} />
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;
