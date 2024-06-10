import React, { useState } from "react";
import "./payment.css";
import $ from "jquery";
import axios from 'axios'

const Payment = () => {

  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    const formData = form.serializeArray();
    let data = {};
    formData.forEach(field => {
      data[field.name] = field.value;
    });

    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: JSON.stringify(data),
      contentType: "application/json",
      success(data) {
        setResult(data.success || data.error);
      },
      error(jqXHR, textStatus, errorThrown) {
        setResult(`Request failed: ${textStatus}`);
      }
    });
  };

  return (
    <>
    <div className="payment-container">
      <div className="div_f">
        <div className="form_r" id="form_r">
          <form
            name="frmLogin"
            id="frmLogin"
            action="http://localhost:8000/Carta.php"
            method="POST"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1>Compila i dettagli della carta di credito</h1>
            <div className="riga">
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Titolare"
                  id="titolare"
                  name="titolare"
                  required
                />
              </div>
            </div>
            <div className="riga">
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Numero Carta"
                  id="n_carta"
                  name="n_carta"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="CAP"
                  id="cap"
                  name="cap"
                  required
                />
              </div>
            </div>
            <div className="riga">
              <div className="input-box_1">
                <input
                  type="date"
                  placeholder="Scadenza"
                  id="scadenza"
                  name="scadenza"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="CVV"
                  id="cvv"
                  name="cvv"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Nazionalità"
                  id="nazionalita"
                  name="nazionalita"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="indirizzo"
                  id="indirizzo"
                  name="indirizzo"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Citta"
                  id="citta"
                  name="citta"
                  required
                />
              </div>
            </div>
            <div className="riga">{result}</div>
            <div className="riga">
              <button type="submit" className="btn">
                Paga
              </button>
            </div>
            {result}
          </form>
        </div>
      </div>
    </div>
    </>
  );
}

export default Payment;
