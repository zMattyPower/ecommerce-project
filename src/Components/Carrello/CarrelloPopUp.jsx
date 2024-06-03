import React, { useEffect } from "react";
import "./Carrello.css"; // Assicurati di avere questo file CSS
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const CarrelloPopUp = ({ onClose }) => {
  //Cookie
  const [cookies, setCookie] = useCookies(["carrello", "prezzoTotale"]);
  //carrello
  useEffect(() => {
    // Chiudi il popup se si clicca fuori di esso
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains("carrello-popup")) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [onClose]);

  const rimuoviDalCarrello = (indice) => {
    const nuovoCarrello = cookies.carrello.filter((_, i) => i !== indice);
    const prezzoTotale = nuovoCarrello.reduce(
      (acc, prodotto) => acc + parseFloat(prodotto.prezzo),
      0
    );
    setCookie("carrello", nuovoCarrello, { path: "/" });
    setCookie("prezzoTotale", prezzoTotale, { path: "/" });
  };
  return (
    <div className="carrello-popup">
      <div className="carrello-popup-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <div>
          <h2>Il tuo carrello</h2>
          <ul>
            {cookies.carrello &&
              cookies.carrello.map((prodotto, index) => (
                <li key={index}>
                  <img src={prodotto.img} alt={prodotto.nome} className="immagine-prodotto"/>{" "}
                  {/* Visualizza l'immagine */}
                  {prodotto.nome} - {prodotto.prezzo} €
                  <button onClick={() => rimuoviDalCarrello(index)}>
                    Rimuovi dal carrello
                  </button>
                </li>
              ))}
          </ul>
          <p>Prezzo totale: {cookies.prezzoTotale || "0"} €</p>
          <Link to="/CarrelloRecap">Pagamento</Link>
        </div>
      </div>
    </div>
  );
};

export default CarrelloPopUp;
