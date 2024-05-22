import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Account/Login'
import Footer from './Components/Footer/Footer'

//Link Page
import { Route, Routes } from 'react-router-dom';
import Donna from "./pages/Donna";
import Uomo from "./pages/Uomo";
import Bambino from "./pages/Bambino";


function App() {
  return (
    <div>
      <Navbar/>
      <Payment></Payment>
      <Login/>
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
