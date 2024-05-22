import React from 'react';
import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";

import { IconName } from "react-icons/ai";
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
          <form action="/action_page.php" className="search_form">
          <input type="text" placeholder="Search.." name="search" id = "search"/>
          <button type="submit" id = "search_icon"><AiOutlineSearch /></button>
          </form>
          </div>
    </nav>
  );
};

export default Navbar;