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
          <div className="link"><Link to="#">Magliette</Link></div>
          <div className="link"><Link to="/Donna/Felpe">Felpe</Link></div>
          <div className="link"><Link to="/Donna/Giacche">Giacche</Link></div>
        </div>

        <div className="riga2_prod"> {/* riga 2 */}

          <div className="riga2_r1_c1_prod" id="c1"> {/* riga 1 della riga 2 e colonna 1 */}
            <div classname="filtro">
              <div className="filtro_1">
                <h3>Filtri</h3>

                <div className="filtro_2">Ordina per
                  <div className="filtro_3">

                    <ul>
                      <li className="list_fil">Prezzo (Crescente)</li>
                      <li className="list_fil">Prezzo (Decrescente)</li>
                    </ul>
                  </div>
                </div>

                <div className="filtro_2">Colore
                  <div className="filtro_3">

                    <ul>
                      <li className="list_fil">Bianco</li>
                      <li className="list_fil">Azzuro</li>
                      <li className="list_fil"></li>
                      <li className="list_fil">Kaki</li>
                      <li className="list_fil">Rosa</li>
                      <li className="list_fil">Grigio</li>
                    </ul>
                  </div>
                </div>

                <div className="filtro_2">Taglia
                  <div className="filtro_3">

                    <ul>
                      <li className="list_fil">XS</li>
                      <li className="list_fil">S</li>
                      <li className="list_fil">M</li>
                      <li className="list_fil">L</li>
                      <li className="list_fil">XL</li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="riga2_r1_c1_prod" id="c2"> {/* riga 1 della riga 2 */}
            <div className="riga2_r1_r1_prod"> {/* riga 1 della riga 1 della riga 2 e colonna 1 */}
              <div className="prod">
                <Link to="#"><img src={d_maglietta_1_1} alt="d_maglietta_1_1" className="image"></img></Link>
                <p> Maglietta a maniche corte</p>
                <p> 9,99 €</p>
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_2_1} alt="d_maglietta_2_1" className="image"></img></Link>
                <p> Maglietta a maniche corte con stampa grafica</p>
                <p> 13,99 €</p>
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_3_1} alt="d_maglietta_3_1" className="image"></img></Link>
                <p> Maglietta cigno a maniche corte</p>
                <p> 15,99 €</p>
              </div>
            </div>

            <div className="riga2_r1_r1_prod"> {/* riga 1 della riga 1 della riga 2 e colonna 2 */}
              <div className="prod">
                <Link to="#"><img src={d_maglietta_1_2} alt="d_maglietta_1_1" className="image"></img></Link>
                <p> Maglietta a maniche corte</p>
                <p> 9,99 €</p>
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_2_2} alt="d_maglietta_2_1" className="image"></img></Link>
                <p> Maglietta a maniche corte con stampa grafica</p>
                <p> 13,99 €</p>
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_3_2} alt="d_maglietta_3_1" className="image"></img></Link>
                <p> Maglietta cigno a maniche corte</p>
                <p> 15,99 €</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default DonnaMagliette;
