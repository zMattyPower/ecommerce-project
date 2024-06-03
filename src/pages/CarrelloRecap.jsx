import { useCookies } from "react-cookie";
import { Link } from 'react-router-dom';

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
                {prodotto.nome} - {prodotto.prezzo} €
              </li>
            ))}
        </ul>
      </div>
      <div>
      <Link to="/Payment">Pagamento</Link>
      </div>
    </>
  );
}

export default CarrelloRecap;
