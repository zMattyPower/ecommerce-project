import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import "./DonnaMagliette.css";
import d_maglietta_1_1 from "../Components/Img/d_maglietta_1_1.jpg";
import d_maglietta_2_1 from "../Components/Img/d_maglietta_2_1.jpg";
import d_maglietta_3_1 from "../Components/Img/d_maglietta_3_1.jpg";
import d_maglietta_1_2 from "../Components/Img/d_maglietta_1_2.jpg";
import d_maglietta_2_2 from "../Components/Img/d_maglietta_2_2.jpg";
import d_maglietta_3_2 from "../Components/Img/d_maglietta_3_2.jpg";


import DonnaMaglietteP1_1 from "./DonnaMaglietteP1_1";


function DonnaMagliette() {
  const [cookies, setCookie] = useCookies(['carrello']);

  const aggiungiAlCarrello = (nomeProdotto, prezzoProdotto, imgProdotto) => {
    const nuovoProdotto = { nome: nomeProdotto, prezzo: prezzoProdotto, img: imgProdotto }; // Aggiungi imgProdotto
    const carrello = cookies.carrello || [];
    const nuovoCarrello = [...carrello, nuovoProdotto];
    
    // Calcola il prezzo totale dei prodotti nel carrello
    const prezzoTotale = nuovoCarrello.reduce((acc, prodotto) => acc + parseFloat(prodotto.prezzo), 0);
    
    // Salva il carrello aggiornato e il prezzo totale nel cookie
    setCookie('carrello', nuovoCarrello, { path: '/' });
    setCookie('prezzoTotale', prezzoTotale, { path: '/' });
   
  };
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
                <Link to="/Donna/Magliette/P/1/_/1"><img src={d_maglietta_1_1} alt="d_maglietta_1_1" className="image"></img></Link>
                
                <p className = "donnamp"> Maglietta a maniche corte</p>
                <p className = "donnamp"> 9,99 €</p>
                <button onClick={() => aggiungiAlCarrello("Maglietta a maniche corte", "9.99",require("../Components/Img/d_maglietta_1_1.jpg"))}>Aggiungi al carrello</button>


              </div>


              <div className="prod">
                <Link to="°"><img src={d_maglietta_2_1} alt="d_maglietta_2_1" className="image"></img></Link>
                <p className = "donnamp"> Maglietta a maniche corte con stampa grafica</p>
                <p className = "donnamp"> 13,99 €</p>

                <button onClick={() => aggiungiAlCarrello("Maglietta a maniche corte", "13.99",{d_maglietta_2_1})}>Aggiungi al carrello</button>

              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_3_1} alt="d_maglietta_3_1" className="image"></img></Link>
                <p className = "donnamp"> Maglietta cigno a maniche corte</p>
                <p className = "donnamp"> 15,99 €</p>
                
              </div>
            </div>

            <div className="riga2_r1_r1_prod"> {/* riga 1 della riga 1 della riga 2 e colonna 2 */}
              <div className="prod">
                <Link to=""><img src={d_maglietta_1_2} alt="d_maglietta_1_1" className="image"></img></Link>
                <p className = "donnamp"> Maglietta a maniche corte</p>
                <p className = "donnamp"> 9,99 €</p>
                
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_2_2} alt="d_maglietta_2_1" className="image"></img></Link>
                <p className = "donnamp"> Maglietta a maniche corte con stampa grafica</p>
                <p className = "donnamp"> 13,99 €</p>
                
              </div>

              <div className="prod">
                <Link to="#"><img src={d_maglietta_3_2} alt="d_maglietta_3_1" className="image"></img></Link>
                <p className = "donnamp"> Maglietta cigno a maniche corte</p>
                <p className = "donnamp"> 15,99 €</p>
                
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default DonnaMagliette;
