import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="navbar-left">
         Clothem
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            Donna
          </li>
          <li>
            Uomo
          </li>
          <li>
            Bambino
          </li>
          <li>
            Neonato
          </li>
        </ul>
      </div>
      <div className="navbar-right">

        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>

        <a href = "/carrello" className="cart-icon"> 
        <i className="bi bi-bag"></i>
        <span className="cart-count">0</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;