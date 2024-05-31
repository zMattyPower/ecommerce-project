import React, { useState, useEffect} from 'react';

import './Navbar.css';
import { AiOutlineSearch } from "react-icons/ai";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import Login from '../Account/Login'
import { useLoginContext } from '../GlobalVariables'; // Import the context hook


import clothem from "../Img/clothem.jpg"

//Page Link
import { Link } from 'react-router-dom';
import DonnaMagliette from "../../pages/DonnaMagliette";
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

  useEffect(() => {
    const menu = document.querySelector(".menu");
    const menuMain = menu.querySelector(".menu-main");
    const goBack = menu.querySelector(".go-back");
    const menuTrigger = document.querySelector(".mobile-menu-trigger");
    const closeMenu = menu.querySelector(".mobile-menu-close");
    let subMenu;

    const showSubMenu = (hasChildren) => {
      subMenu = hasChildren.querySelector(".sub-menu");
      subMenu.classList.add("active");
      subMenu.style.animation = "slideLeft 0.5s ease forwards";
      const menuTitle = hasChildren.querySelector("i").parentNode.childNodes[0].textContent;
      menu.querySelector(".current-menu-title").innerHTML = menuTitle;
      menu.querySelector(".mobile-menu-head").classList.add("active");
    };

    const hideSubMenu = () => {
      subMenu.style.animation = "slideRight 0.5s ease forwards";
      setTimeout(() => {
        subMenu.classList.remove("active");
      }, 300);
      menu.querySelector(".current-menu-title").innerHTML = "";
      menu.querySelector(".mobile-menu-head").classList.remove("active");
    };

    const toggleMenu = () => {
      menu.classList.toggle("active");
      document.querySelector(".menu-overlay").classList.toggle("active");
    };

    menuMain.addEventListener("click", (e) => {
      if (!menu.classList.contains("active")) {
        return;
      }
      if (e.target.closest(".menu-item-has-children")) {
        const hasChildren = e.target.closest(".menu-item-has-children");
        showSubMenu(hasChildren);
      }
    });

    goBack.addEventListener("click", hideSubMenu);
    menuTrigger.addEventListener("click", toggleMenu);
    closeMenu.addEventListener("click", toggleMenu);
    document.querySelector(".menu-overlay").addEventListener("click", toggleMenu);

    window.onresize = function () {
      if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
          toggleMenu();
        }
      }
    };

    // Cleanup event listeners on component unmount
    return () => {
      menuMain.removeEventListener("click", (e) => {
        if (!menu.classList.contains("active")) {
          return;
        }
        if (e.target.closest(".menu-item-has-children")) {
          const hasChildren = e.target.closest(".menu-item-has-children");
          showSubMenu(hasChildren);
        }
      });
      goBack.removeEventListener("click", hideSubMenu);
      menuTrigger.removeEventListener("click", toggleMenu);
      closeMenu.removeEventListener("click", toggleMenu);
      document.querySelector(".menu-overlay").removeEventListener("click", toggleMenu);
      window.onresize = null;
    };
  }, []);

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
                <Link to="/"><img src = {clothem}  alt = "clothem" className="clothem"/></Link>
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
                            <Link to="/Donna/Magliette">Magliette</Link>
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