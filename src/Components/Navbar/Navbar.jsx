import React, { useState } from 'react';
import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Login from '../Account/Login'
import { useLoginContext } from '../GlobalVariables'; // Import the context hook

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
  const { useLogin, setUseLogin } = useLoginContext();
  const toggleLogin = () => {
    setUseLogin(!useLogin);
  };

  return (
    <>
      <div>
        {useLogin == true && <Login />}
      </div>
      <header className="header">
        <div className="container">
          <div className="row v-center">
            <div className="header-item item-left">
              <div className="logo">
                <Link to="/">Logo</Link>
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
                  <li className="menu-item-has-children">
                    <Link to="#">
                      Donna<i className="fa fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                      <div className="list-item">
                        <h4 className="title">Top</h4>
                        <ul>
                          <li>
                            <Link to="/Donna/Maglietta/TShirt">Magliette</Link>
                          </li>
                          <li>
                            <Link to="#">Felpe</Link>
                          </li>
                          <li>
                            <Link to="#">Giacche</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Bottom</h4>
                        <ul>
                          <li>
                            <Link to="#">Pantaloni</Link>
                          </li>
                          <li>
                            <Link to="#">Gonne e Vestiti</Link>
                          </li>
                          <li>
                            <Link to="#">Pantaloncini</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Scarpe</h4>
                        <ul>
                          <li>
                            <Link to="#">Camminata</Link>
                          </li>
                          <li>
                            <Link to="#">Corsa</Link>
                          </li>
                          <li>
                            <Link to="#">Allenamento</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <h4 className="title">Accessori</h4>
                        <ul>
                          <li>
                            <Link to="#">Borse</Link>
                          </li>
                          <li>
                            <Link to="#">Cappelli</Link>
                          </li>
                          <li>
                            <Link to="#">Occhiali</Link>
                          </li>
                        </ul>
                      </div>

                    </div>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="#">
                      Uomo<i className="fa fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                        <h4 className="title">Top</h4>
                        <ul>
                          <li>
                            <Link to="/">Magliette</Link>
                          </li>
                          <li>
                            <Link to="#">Felpe</Link>
                          </li>
                          <li>
                            <Link to="#">Giacche</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Bottom</h4>
                        <ul>
                          <li>
                            <Link to="#">Pantaloni</Link>
                          </li>
                          <li>
                            <Link to="#">Vestiti</Link>
                          </li>
                          <li>
                            <Link to="#">Pantaloncini</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Scarpe</h4>
                        <ul>
                          <li>
                            <Link to="#">Camminata</Link>
                          </li>
                          <li>
                            <Link to="#">Corsa</Link>
                          </li>
                          <li>
                            <Link to="#">Allenamento</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <h4 className="title">Accessori</h4>
                        <ul>
                          <li>
                            <Link to="#">Borse</Link>
                          </li>
                          <li>
                            <Link to="#">Cappelli</Link>
                          </li>
                          <li>
                            <Link to="#">Occhiali</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="#">
                      Bambino<i className="fa fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                        <h4 className="title">Top</h4>
                        <ul>
                          <li>
                            <Link to="/Donna/Maglietta/TShirt">Magliette</Link>
                          </li>
                          <li>
                            <Link to="#">Felpe</Link>
                          </li>
                          <li>
                            <Link to="#">Giacche</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Bottom</h4>
                        <ul>
                          <li>
                            <Link to="#">Pantaloni</Link>
                          </li>
                          <li>
                            <Link to="#">Gonne e Vestiti</Link>
                          </li>
                          <li>
                            <Link to="#">Pantaloncini</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Scarpe</h4>
                        <ul>
                          <li>
                            <Link to="#">Camminata</Link>
                          </li>
                          <li>
                            <Link to="#">Corsa</Link>
                          </li>
                          <li>
                            <Link to="#">Allenamento</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <h4 className="title">Accessori</h4>
                        <ul>
                          <li>
                            <Link to="#">Borse</Link>
                          </li>
                          <li>
                            <Link to="#">Cappelli</Link>
                          </li>
                          <li>
                            <Link to="#">Occhiali</Link>
                          </li>
                        </ul>
                      </div>


                    </div>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="#">
                      Neonato<i className="fa fa-angle-down"></i>
                    </Link>
                    <div className="sub-menu mega-menu mega-menu-column-4">
                    <div className="list-item">
                        <h4 className="title">Top</h4>
                        <ul>
                          <li>
                            <Link to="/Donna/Maglietta/TShirt">Magliette</Link>
                          </li>
                          <li>
                            <Link to="#">Felpe</Link>
                          </li>
                          <li>
                            <Link to="#">Giacche</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Bottom</h4>
                        <ul>
                          <li>
                            <Link to="#">Pantaloni</Link>
                          </li>
                          <li>
                            <Link to="#">Gonne e Vestiti</Link>
                          </li>
                          <li>
                            <Link to="#">Pantaloncini</Link>
                          </li>
                        </ul>

                      </div>
                      <div className="list-item">
                        <h4 className="title">Scarpe</h4>
                        <ul>
                          <li>
                            <Link to="#">Camminata</Link>
                          </li>
                          <li>
                            <Link to="#">Corsa</Link>
                          </li>
                          <li>
                            <Link to="#">Allenamento</Link>
                          </li>
                        </ul>
                      </div>

                      <div className="list-item">
                        <h4 className="title">Accessori</h4>
                        <ul>
                          <li>
                            <Link to="#">Borse</Link>
                          </li>
                          <li>
                            <Link to="#">Cappelli</Link>
                          </li>
                          <li>
                            <Link to="#">Occhiali</Link>
                          </li>
                        </ul>
                      </div>


                    </div>
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
                <a href="#" className="user" id="b_login_icon" onClick={toggleLogin}><FontAwesomeIcon icon={faUser} id="l_icon" /></a>
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

export default Navbar;