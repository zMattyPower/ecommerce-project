import React from 'react';
import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";

import { IconName } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { IoMdPerson } from "react-icons/io";

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

        <div class='inputWithButton'>
          <form action="/action_page.php" className="search_form">
            <input type="text" placeholder="Cerca.." name="search" id = "search"/>
           <button type="submit" id = "b_search_icon"><AiOutlineSearch id = "s_icon"/></button>
          </form>
        </div>

        <div className = "login"> 
        <button type="submit" id = "b_login_icon"><IoMdPerson id = "l_icon"/></button>
        </div>

      </div>



    </nav>
  );
};
/*
npm install @react-icons/all-files --save
npm install react-icons --save
import { IoMdPerson } from "react-icons/io";

*/


export default Navbar;