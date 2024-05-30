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

      <div className="riga1_prod"> {/* riga 1*/}
      <Link to="#">Magliette</Link>
      <Link to="/Donna/Felpe">Felpe</Link>
      <Link to="/Donna/Giacche">Giacche</Link>
      </div>

      <div className="riga2_prod"> {/* riga 2 */}

        <div className="riga2_1_prod"> {/* riga 2 e colonna 1 */}
        guygiutyvubbbbbbbbbbbbbbbbbbbbbbbbbb
        </div>

        <div className="riga2_2_1_prod"> {/* riga 2 e colonna 2 */}

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

        <div className="riga2_2_2_prod">
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
      </div>
    </>
  );
}

export default DonnaMagliette;
