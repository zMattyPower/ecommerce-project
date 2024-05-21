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
              <ul className="dropdown">
                <li>Option 11</li>
                <li>Option 2</li>
                <li>Option 3</li>
                {/* Add more dropdown options */}
              </ul>
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