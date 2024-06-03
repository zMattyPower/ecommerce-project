import React, { useEffect } from 'react';
import './Carrello.css'; // Assicurati di avere questo file CSS

const CarrelloPopUp = ({ onClose }) => {
  useEffect(() => {
    // Chiudi il popup se si clicca fuori di esso
    const handleOutsideClick = (event) => {
      if (event.target.classList.contains('carrello-popup')) {
        onClose();
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [onClose]);

  return (
    <div className="carrello-popup">
      <div className="carrello-popup-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Il tuo carrello</h2>
        <p>Il carrello è vuoto.</p>
        {/* Puoi aggiungere qui altri elementi del carrello */}
      </div>
    </div>
  );
};

export default CarrelloPopUp;
