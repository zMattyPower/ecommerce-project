import React, { useState } from "react";
import "./payment.css";
import $ from "jquery";

function Payment() {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
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
      <div className="div_f">
        <div className="form_r" id="form_r">
          <form
            name="frmLogin"
            id="frmLogin"
            action="http://localhost:8000/Carta.php"
            method="post"
            onSubmit={(event) => handleSubmit(event)}
          >
            <h1>Compila i dettagli della carta di credito</h1>
            <div className="riga">
              <div className="input-box_1">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Numero Carta"
                  id="numero"
                  name="numero"
                  required
                />
              </div>
            </div>
            <div className="riga">
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Titolare"
                  id="titolare"
                  name="titolare"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Indirizzo"
                  id="indirizzo"
                  name="indirizzo"
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
            </div>

            <div className="riga">
  
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
                  placeholder="CAP"
                  id="cap"
                  name="cap"
                  required
                />
              </div>
              <div className="input-box_1">
                <input
                  type="text"
                  placeholder="Città"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Payment;
