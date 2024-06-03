import React, { useState } from "react";
import "./payment.css";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const handleCardNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 16); // Rimuove i non numeri e limita a 16 caratteri
    setCardNumber(input);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleCvvChange = (event) => {
    const input = event.target.value.replace(/\D/g, '').slice(0, 3); // Rimuove i non numeri e limita a 3 caratteri
    setCvv(input);
  };

  const handleCardHolderChange = (event) => {
    setCardHolder(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handlePostalCodeChange = (event) => {
    setPostalCode(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Esegui qui la logica per inviare i dettagli della carta di credito al backend o per elaborare il pagamento
  };

  return (
    <div className="payment-container">
      <h2>Compila i dettagli della carta di credito</h2>
      <div className="form-group">
          <label htmlFor="cardHolder">Titolare della carta:</label>
          <input
            type="text"
            id="cardHolder"
            value={cardHolder}
            onChange={handleCardHolderChange}
            required
          />
        </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numero della carta di credito:</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="16"
            required
          />
        </div>
        <div className="form-group">
          <label>Data di scadenza:</label>
          <input
            type="date"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={handleCvvChange}
            maxLength="3"
            required
          />
        </div>
        <div className="form-group">
          <label>Città:</label>
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CAP:</label>
          <input
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            maxLength="10"
            required
          />
        </div>
        <div className="form-group">
          <label>Indirizzo di casa:</label>
          <input
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nazione:</label>
          <input
            type="text"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </div>
        <button type="submit">Paga</button>
      </form>
    </div>
  );
}

export default Payment;
