import React from 'react';
import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";

//Page Link
import { Link } from 'react-router-dom';
import Donna from "../../pages/Donna";
import Uomo from "../../pages/Uomo";
import Bambino from "../../pages/Bambino";

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
              
                <li><Link to="/donna/maglietta">Maglietta</Link></li>
                <li><Link to="/donna/pantaloni">Pantaloni</Link></li>
                <li><Link to="/donna/sport">Sport</Link></li>
                {/* Add more dropdown options */}
              </ul>
          </li>
          
          <li>
            Uomo
              <ul className="dropdown">
                <li><Link to="/Uomo/Maglietta">Maglietta</Link></li>
                <li><Link to="/Uomo/Pantaloni">Pantaloni</Link></li>
                <li><Link to="/Uomo/Sport">Sport</Link></li>
                {/* Add more dropdown options */}
              </ul>
          </li>

          <li>
            Bambino
              <ul className="dropdown">
                <li><Link to="/uomo/maglietta">Maglietta</Link></li>
                <li><Link to="/uomo/pantaloni">Pantaloni</Link></li>
                <li><Link to="/uomo/sport">Sport</Link></li>
                {/* Add more dropdown options */}
              </ul>
          </li>
          
          <li>   
            Neonato
              <ul className="dropdown">
                <li><Link to="/bambino/maglietta">Maglietta</Link></li>
                <li><Link to="/bambino/pantaloni">Pantaloni</Link></li>
                <li><Link to="/bambino/sport">Sport</Link></li>
                {/* Add more dropdown options */}
              </ul>
          </li>
        </ul>
      </div>

      <div className="navbar-right">
        <div class='inputWithButton'>
          <form action="/action_page.php" className="search_form">
            <input type="text" placeholder="Cerca.." name="search" id = "search"/>
           <button type="submit" id = "search_icon"><AiOutlineSearch id = "s_icon"/></button>
          </form>
        </div>
      </div>



    </nav>
  );
};
/*npm install @react-icons/all-files --save
npm install react-icons --save*/


export default Navbar;