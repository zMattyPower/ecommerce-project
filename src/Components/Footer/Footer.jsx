import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h3>Contatti</h3>
        <p>Email: info@example.com</p>
        <p>Telefono: 0123456789</p>
        <p>Indirizzo: Via Example, 123</p>
      </div>
      <div>
        <h3>Seguici</h3>
        <ul className="social-links">
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
