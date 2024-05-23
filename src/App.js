import "./App.css";

import Login from "./Components/Account/Login";
import Footer from "./Components/Footer/Footer";


//Link Page
import {Routes,Route} from "react-router-dom"
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
        <Route path="/Donna/Maglietta/TShirt" element={< DonnaMaglietta/>} />
        <Route path="/uomo/maglietta" element={<UomoMaglietta />} />
        <Route path="/bambino/maglietta" element={<BambinoMaglietta />} />
        <Route path="/neonato/maglietta" element={<NeonatoMaglietta />} />
      </Routes>

    <Footer></Footer> 
    </div>
  );
}

export default App;
