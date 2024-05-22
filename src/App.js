import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Account/Login";
import Footer from "./Components/Footer/Footer";


//Link Page
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import DonnaMaglietta from "./pages/DonnaMaglietta";
import UomoMaglietta from "./pages/UomoMaglietta";
import BambinoMaglietta from "./pages/BambinoMaglietta";
import NeonatoMaglietta from "./pages/NeonatoMaglietta";

function App() {
  return (
    <div>
      
      
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="/donna/maglietta" element={< DonnaMaglietta/>} />
        <Route path="/uomo/maglietta" element={<UomoMaglietta />} />
        <Route path="/bambino/maglietta" element={<BambinoMaglietta />} />
        <Route path="/neonato/maglietta" element={<NeonatoMaglietta />} />
      </Routes>
      
    </div>
  );
}

export default App;
