import React from 'react';
import './Carrello.css'; // Crea un file CSS per lo stile del pop-up

const CarrelloPopUp = ({ onClose }) => {
  return (
    <div className="cart-popup">
      <div className="cart-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Il tuo carrello</h2>
        <p>Il carrello è vuoto.</p>
        {/* Puoi aggiungere qui altri elementi del carrello */}
      </div>
    </div>
  );
};

export default CarrelloPopUp;