import React, { useState } from "react";
import "./payment.css";
import $ from "jquery";

function Payment() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [result, setResult] = useState("");// come la faccio diventare utilizzata ?!?!?!?!?

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

  const handleSubmit = (e) => {   ///*********** OCCHIO QUA */
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
        type: "POST",
        url: form.attr("action"),
        data: form.serialize(),
        success(data) {
            setResult(data);
        },
    });
};

  return (
    <div className="payment-container">
      <h2>Compila i dettagli della carta di credito</h2>
      <div className="form-group">
          <label htmlFor="cardHolder">Titolare della carta:</label>
          <input className="text"
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
          <input className="text"
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
          <input className="text"
            type="date"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV:</label>
          <input className="text"
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
          <input className="text"
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
        </div>
        <div className="form-group">
          <label>CAP:</label>
          <input className="text"
            type="text"
            value={postalCode}
            onChange={handlePostalCodeChange}
            maxLength="10"
            required
          />
        </div>
        <div className="form-group">
          <label>Indirizzo di casa:</label>
          <input className="text"
            type="text"
            value={address}
            onChange={handleAddressChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nazione:</label>
          <input className="text"
            type="text"
            value={country}
            onChange={handleCountryChange}
            required
          />
        </div>
        <button className="pay" type="submit">Paga</button>
      </form>
    </div>
  );
}

export default Payment;
