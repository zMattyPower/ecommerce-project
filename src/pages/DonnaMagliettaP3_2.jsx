import "./DonnaMaglietteP1_1.css";
import { Link } from "react-router-dom";
import Taglia from "../Components/Taglia/Taglia";

import d_maglietta_3_1 from "../Components/Img/d_maglietta_3_1.jpg";
import d_maglietta_3_2 from "../Components/Img/d_maglietta_3_2.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import { useCookies } from "react-cookie";


function DonnaMaglietteP3_2() {
    const [cookies, setCookie] = useCookies(["carrello"]);
    const [quantita, setQuantita] = useState(1); // Stato per il numero di magliette selezionate
    const [tagliaSelezionata, setTagliaSelezionata] = useState(""); // Stato per la taglia selezionata

    const aggiungiAlCarrello = (
        nomeProdotto,
        prezzoProdotto,
        imgProdotto,
        taglia,
        quantita
    ) => {
        const nuovoProdotto = {
            nome: nomeProdotto,
            prezzo: prezzoProdotto,
            img: imgProdotto,
            taglia: taglia, // Passa la taglia selezionata
            quantita: quantita,
        };

        const carrello = cookies.carrello || [];
        const nuovoCarrello = [...carrello, nuovoProdotto];

        // Calcola il prezzo totale dei prodotti nel carrello
        const prezzoTotale = nuovoCarrello.reduce(
            (acc, prodotto) => acc + parseFloat(prodotto.prezzo * prodotto.quantita),
            0
        );

        // Salva il carrello aggiornato e il prezzo totale nel cookie
        setCookie("carrello", nuovoCarrello, { path: "/" });
        setCookie("prezzoTotale", prezzoTotale, { path: "/" });
    };

    // Funzioni per incrementare e decrementare la quantità di magliette
    const incrementaQuantita = () => {
        setQuantita((prevQuantita) => prevQuantita + 1);
    };

    const decrementaQuantita = () => {
        if (quantita > 1) {
            setQuantita((prevQuantita) => prevQuantita - 1);
        }
    };


    return (
        <>
            <div className="contenitore_prod">
                <div className="riga1_prodM">
                    <div className="m1c">
                        <img
                            src={d_maglietta_3_2}
                            alt="d_maglietta_3_2"
                            className="m1"
                        ></img>
                    </div>

                    <div className="m1c">
                        <div className="riga1_r1_prodM">
                            <p className="des">
                                {" "}
                                Maglietta cigno a maniche corte <br /> 15,99 €
                            </p>

                        </div>

                        <div className="riga1_r2_prodM">
                            <Link to="/Donna/Magliette/P/3/_/1"><img
                                src={d_maglietta_3_1}
                                alt="d_maglietta_3_1"
                                className="c_m1">
                            </img></Link>
                            <img
                                src={d_maglietta_3_2}
                                alt="d_maglietta_3_2"
                                className="c_m1"
                            ></img>
                        </div>

                        <div className="riga1_r3_prodM">
                            <div className="taglia">Taglia</div>
                            <p className="taglia">
                                <Taglia setTaglia={setTagliaSelezionata} tagliaSelezionata={tagliaSelezionata} />
                            </p>
                        </div>

                        <div className="riga1_r4_prodM">
                            <div className="quant">
                                <button className="meno" onClick={decrementaQuantita}>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input
                                    type="number"
                                    value={quantita}
                                    min="1"
                                    max="10"
                                    className="number"
                                    readOnly
                                />

                                <button className="piu" onClick={incrementaQuantita}>
                                    <FontAwesomeIcon icon={faPlus} />
                                </button>
                            </div>
                            <div className="quant">
                                <button className="car"
                                    onClick={() =>
                                        aggiungiAlCarrello(
                                            "Maglietta cigno a maniche corte",
                                            "15.99",
                                            d_maglietta_3_2,
                                            tagliaSelezionata, // Passa la taglia selezionata
                                            quantita
                                        )
                                    }
                                >
                                    Aggiungi al carrello
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DonnaMaglietteP3_2;
