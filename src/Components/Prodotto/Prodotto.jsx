import "./Prodotto.css"


const Prodotto = ({ nome, descrizione, prezzo, immagine }) => {
    return (
        <div className="prodotto-card">
            <img src={immagine} alt={nome} className="prodotto-immagine" />
            <div className="prodotto-info">
                <h2 className="prodotto-nome">{nome}</h2>
                <p className="prodotto-descrizione">{descrizione}</p>
                <p className="prodotto-prezzo">€{prezzo.toFixed(2)}</p>
            </div>
        </div>
    );
};

export default Prodotto;