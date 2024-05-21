import React from 'react';
import './Navbar.css';

import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';




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
              <ul className="dropdown">
                <li>Option 1</li>
                <li>Option 23</li>
                <li>Option 3</li>
                {/* Add more dropdown options */}
              </ul>
          </li>

          <li>
            Bambino
              <ul className="dropdown">
                <li>Option 1</li>
                <li>Option 25</li>
                <li>Option 3</li>
                {/* Add more dropdown options */}
              </ul>
          </li>
          
          <li>   
            Neonato
              <ul className="dropdown">
                <li>Option t77</li>
                <li>Option 2</li>
                <li>Option 3</li>
                {/* Add more dropdown options */}
              </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <Form className="d-flex">
        <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              id='search'
              aria-label="Search"
            />
          </Form>

      </div>
    </nav>
  );
};

export default Navbar;