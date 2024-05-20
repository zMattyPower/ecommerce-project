import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="logo">
          Clothem
        </a>
      </div>
      <div className="navbar-center">
        <ul className="nav-links">
          <li>
            <a href="/products">Prodotti</a>
          </li>
          <li>
            <a href="/about">Chi siamo</a>
          </li>
          <li>
            <a href="/contact">Contattaci</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <a href="/cart" className="cart-icon">
          <i className="bi bi-bag"></i>
          <span className="cart-count">0</span>
        </a>
        <a href="/account" className="user-icon">
          <i className="fas fa-user"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;