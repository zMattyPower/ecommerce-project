import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';
import "./CarrelloRecap.css"
function CarrelloRecap() {
  const [cookies] = useCookies(["carrello"]);

  return (
    <>
      <div>
        <h2>Riepilogo del carrello</h2>
        <ul>
            {cookies.carrello &&
              cookies.carrello.map((prodotto, index) => (
                <li key={index}>
                  <img
                    src={prodotto.img}
                    alt={prodotto.nome}
                    className="immagine-prodotto"
                  />
                  {prodotto.nome} - Taglia: {prodotto.taglia}, Quantità:{""}
                  {prodotto.quantita} - {prodotto.prezzo} €
                </li>
              ))}
          </ul>
          <p>Prezzo totale: {cookies.prezzoTotale || "0"} €</p>
      </div>
      <div>
      <Link to="/Payment">Pagamento</Link>
      </div>
    </>
  );
}

export default CarrelloRecap;
