import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Login from '../Account/Login'

//Page Link
import { Link } from 'react-router-dom';
import Donna from "../../pages/DonnaMaglietta";
import Uomo from "../../pages/UomoMaglietta";
import Bambino from "../../pages/BambinoMaglietta";

import { IconName } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { IoMdPerson } from "react-icons/io";

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';




const Navbar = () => {
  var toggleLog = false;
  const [page, setPage] = useState(toggleLog)

  var currentLog = 0;
  var toggleReg = false;
  var toggleForgot = false;
  var loggedIn = localStorage['loggedIn'] || "false";
  var loggedEmail = localStorage['loggedEmail'] || null;
  var loggedUsername = localStorage['loggedUsername'] || null;

  function toggle() {
    toggleLog = !toggleLog
  }

  function ShowLoginForm() {
    if (loggedIn == "true") {
      alert("Sei loggato come " + loggedUsername + "\nEmail: " + loggedEmail);
      return;
    }
    if (toggleLog) {
      const BlurredDiv = document.getElementById("blur");
      <Login />
      //BlurredDiv.parentNode.removeChild(BlurredDiv);
      //document.getElementById("wrapper").style.visibility = "hidden";
      toggleLog = false;
      currentLog = 0;
    }
    else {
      const BlurredDiv = document.createElement("div");
      //BlurredDiv.id = "blur";
      document.body.appendChild(BlurredDiv);
      //document.getElementById("wrapper").style.visibility = "visible";
      console.log("test");
      toggleLog = true;
      currentLog = 1;
    }
  }
  return (
    <>


      {/*dfhdfjdfjhdfjdfj*/}

      <div>
        {page == true && <Login />}
      </div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <a href="#">MyStore</a>
              </div>
            </div>



            {/* menu start here */}
            <div className="header-item item-center">
              <div className="menu-overlay">
              </div>
              <nav className="menu">
                <div className="mobile-menu-head">
                  <div className="go-back"><i className="fa fa-angle-left"></i></div>
                  <div className="current-menu-title"></div>
                  <div className="mobile-menu-close">&times;</div>
                </div>
                <ul className="menu-main">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">New <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="" alt="new Product" />
                          <h4 className="title">Product 1</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="img/p2.jpg" alt="new Product" />
                          <h4 className="title">Product 2</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="img/p3.jpg" alt="new Product" />
                          <h4 className="title">Product 3</h4>
                        </a>
                      </div>
                      <div className="list-item text-center">
                        <a href="#">
                          <img src="img/p4.jpg" alt="new Product" />
                          <h4 className="title">Product 4</h4>
                        </a>
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Shop <i className="fa fa-angle-down"></i></a>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Men's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 className="title">Beauty</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Women's Fashion</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                        <h4 className="title">Furniture</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <h4 className="title">Home, Kitchen</h4>
                        <ul>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                          <li><a href="#">Product List</a></li>
                        </ul>
                      </div>
                      <div className="list-item">
                        <img src="img/shop1.jpg" alt="shop" />
                      </div>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Blog <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><a href="#">Standard Layout</a></li>
                        <li><a href="#">Grid Layout</a></li>
                        <li><a href="#">single Post Layout</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#">Pages <i className="fas fa-angle-down"></i></a>
                    <div className="sub-menu single-column-menu">
                      <ul>
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Register</a></li>
                        <li><a href="#">Faq</a></li>
                        <li><a href="#">404 Page</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            {/* menu end here */}







            <div class="header-item item-right">
              <div className='inputWithButton'>
                <form action="/action_page.php" className="search_form">
                  <input type="text" placeholder="  Cerca.." name="search" id="search" />
                  <button type="submit" id="b_search_icon"> <FontAwesomeIcon icon={faMagnifyingGlass} id="s_icon" /></button>
                </form>
              </div>
              <div className="login">
                <a href="#" className="user" id="b_login_icon" onClick={() => setPage(!page)}><FontAwesomeIcon icon={faUser} id="l_icon" /></a>
              </div>
              <div className="cart">
                <button type="submit" id="b_cart_icon"><FontAwesomeIcon icon={faCartShopping} id="c_icon" /></button>
              </div>

              <div class="mobile-menu-trigger">
                <span></span>
              </div>
            </div>
            <div className="navbar-right">






            </div>




          </div>
        </div>
      </header>
    </>
  );
};
/* npm install @react-icons/all-files --save
npm install react-icons --save
import {IoMdPerson} from "react-icons/io";

        */


export default Navbar;