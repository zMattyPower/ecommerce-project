import './CardImg.css';

const CardImg = ({ titolo, immagine }) => {
    return (
        <div className="card-img">
            <img src={immagine} alt={titolo} className="card-image" />
        </div>
    );
};

export default CardImg;
