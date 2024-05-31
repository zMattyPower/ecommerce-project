import './Card.css';

const Card = ({ titolo, descrizione, immagine }) => {
    return (
        <div className="card">
            <img src={immagine} alt={titolo} className="card-image" />
            <div className="card-content">
                <h2 className="card-title">{titolo}</h2>
                <p className="card-description">{descrizione}</p>
            </div>
        </div>
    );
};

export default Card;