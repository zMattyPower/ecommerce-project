import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { Link } from 'react-router-dom';
import "./DonnaMagliette.css";
import d_maglietta_1_1 from "../Components/Img/d_maglietta_1_1.jpg";
import d_maglietta_2_1 from "../Components/Img/d_maglietta_2_1.jpg";
import d_maglietta_3_1 from "../Components/Img/d_maglietta_3_1.jpg";
import d_maglietta_1_2 from "../Components/Img/d_maglietta_1_2.jpg";
import d_maglietta_2_2 from "../Components/Img/d_maglietta_2_2.jpg";
import d_maglietta_3_2 from "../Components/Img/d_maglietta_3_2.jpg";


function DonnaMagliette() {
  return (
    <>
      <div className="contenitore_cat">
      <div className="riga_prod">
      <Link to="#">Magliette</Link>
      <Link to="/Donna/Felpe">Felpe</Link>
      <Link to="/Donna/Giacche">Giacche</Link>
      </div>
        <div className="riga_prod">
          <div className="prod">
            <img src = {d_maglietta_1_1} alt ="d_maglietta_1_1"></img>
          </div>

          <div className="prod">
          <img src = {d_maglietta_2_1} alt ="d_maglietta_2_1"></img>
          </div>

          <div className="prod">
          <img src = {d_maglietta_3_1} alt ="d_maglietta_3_1"></img>
          </div>

        </div>

        <div className="riga_prod">
          <div className="prod">
            <img src = {d_maglietta_1_2} alt ="d_maglietta_1_1"></img>
          </div>

          <div className="prod">
          <img src = {d_maglietta_2_2} alt ="d_maglietta_2_1"></img>
          </div>

          <div className="prod">
          <img src = {d_maglietta_3_2} alt ="d_maglietta_3_1"></img>
          </div>

        </div>
      </div>
    </>
  );
}

export default DonnaMagliette;
