
/*import React from 'react';

import React from 'react';

import { useState } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { useLoginContext } from '../GlobalVariables';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import './Register.css';*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useLoginContext } from '../GlobalVariables';
import $ from "jquery";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import './Register.css';

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [result, setResult] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const { useLogin, setUseLogin } = useLoginContext();
    const toggleLogin = () => {
        setUseLogin(!useLogin);
    };

    /*const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = {
            nome: form.nome.value,
            cognome: form.cognome.value,
            email: form.email.value,
            pass: form.pass.value,
            data_nascita: form.data_nascita.value,
            telefono: form.telefono.value,
            trattamento: form.trattamento.checked ? 'on' : 'off'
        };
        
        try {
            const response = await axios.post('http://localhost:8000/register.php', formData);
            setResult(response.data.message);
        } catch (error) {
            setResult('Errore durante la registrazione: ' + error.message);
        }
    };*/

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = $(e.target);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

    return (
        <>
            <div className="div_f">
                <div className="form_r" id="form_r">
                    <form name="frmLogin" id="frmLogin"
                        action="http://localhost:8000/register.php"
                        method="post"
                        onSubmit={(event) => handleSubmit(event)}
                    >

                        <h1>Registrazione</h1>
                        <div className="riga_reg">
                            <div className="input-box_1">

                                <input type="text" placeholder="Nome" id="nome" name="nome"
                                    required />
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUser} id="login" />
                                </div>
                            </div>

                            <div className="input-box_1">

                                <input type="text" placeholder="Cognome" id="cognome" name="cognome"
                                    required />
                                <div className="icon">
                                    <FontAwesomeIcon icon={faUser} id="login" />
                                </div>
                            </div>
                        </div>

                        <div className="riga_reg">
                            <div className="input-box_1">

                                <input type="email" placeholder="E-Mail" id="email_r" name="email"
                                    required />

                                <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} id="login" />
                                </div>
                            </div>

                            <div className="input-box_1">

                                <input type={passwordShown ? "text" : "password"} id="pass_r" name="pass_r" placeholder="Password" required />

                                <div className="icon_pass">
                                    <div><FontAwesomeIcon icon={faLock} id="login" /></div>
                                </div>
                            </div>

                        </div>

                        <div className="riga_reg">
                            <div className="input-box_1">

                                <input type="date" id="data_nascita" name="data_nascita"
                                    required />


                                <div className="icon">
                                </div>
                            </div>

                            <div className="input-box_1">

                                <input type="tel" placeholder="Telefono" id="telefono" name="telefono" required />

                                <div className="icon"> <FontAwesomeIcon icon={faPhone} id="login" />
                                </div>
                            </div>

                        </div>

                        <div className="riga_reg">
                            <p><input type="checkbox" id="trattamento" name="trattamento"
                                required /> Termini e condizioni</p>
                            <br />
                            <button type="submit" className="btn">Registrati</button>
                        </div>

                        {result}

                        <div className="riga_reg">
                            <div className="register-link">
                                <hr />
                                <p className='link_login'><a
                                    href="#"
                                    className="user"
                                    id="b_login_icon"
                                    onClick={toggleLogin}
                                >
                                    Hai già un account? Fai il login<i className='bx bx-chevrons-right'></i></a></p>
                            </div>
                        </div>
                    </form>
                </div >

            </div >
        </>
    );
};

export default Register;

/*var currentLog = 0;
var toggleLog = false;
var toggleReg = false;
var toggleForgot = false;
var loggedIn = localStorage['loggedIn'] || "false";
var loggedEmail = localStorage['loggedEmail'] || null;
var loggedUsername = localStorage['loggedUsername'] || null;

//Mostra il Form del Login
function showLoginForm() {
    if (loggedIn == "true") {
        alert("Sei loggato come " + loggedUsername + "\nEmail: " + loggedEmail);
        return;
    }
    if (toggleLog) {
        const BlurredDiv = document.getElementById("blur");
        BlurredDiv.parentNode.removeChild(BlurredDiv);
        document.getElementById("wrapper").style.visibility = "hidden";
        toggleLog = false;
        currentLog = 0;
    }
    else {
        const BlurredDiv = document.createElement("div");
        BlurredDiv.id = "blur";
        document.body.appendChild(BlurredDiv);
        document.getElementById("wrapper").style.visibility = "visible";
        toggleLog = true;
        currentLog = 1;
    }
}*/


//Mostra il Form della Registrazione
/*function showRegisterForm() {
    if (toggleReg) {
        document.getElementById("wrapper-reg").style.visibility = "hidden";
        document.getElementById("wrapper").style.visibility = "visible";
        toggleReg = false;
        toggleLog = true;
        currentLog = 1;
    }
    else {
        document.getElementById("wrapper").style.visibility = "hidden";
        document.getElementById("wrapper-reg").style.visibility = "visible";
        toggleLog = false;
        toggleReg = true;
        currentLog = 2;
    }
}

//Mostra il Form per il Reset della Password
/*function showForgotForm() {
    if (toggleForgot) {
        document.getElementById("wrapper-forgot").style.visibility = "hidden";
        document.getElementById("wrapper").style.visibility = "visible";
        toggleForgot = false;
        toggleLog = true;
        currentLog = 1;
    }
    else {
        document.getElementById("wrapper").style.visibility = "hidden";
        document.getElementById("wrapper-forgot").style.visibility = "visible";
        toggleLog = false;
        toggleForgot = true;
        currentLog = 3;
    }
}*/

//Aggiunta la possibilità di chiudere il form del login premendo Escape
/*document.addEventListener('keydown', function(event) {
    if(event.key == 'Escape') {
        if (currentLog != 0) {
            closeForm();
        }
    }
});*/

/*function TogglePassword() {
    //const password = document.querySelector("#password");
    const password = pass;
    console.log(password)
    const toggle = toggleRef.current;
    if (!toggle) return;
    if (!password) return;
    //const type = password.getAttribute("type") === "password" ? "text" : "password";
    //password.setAttribute("type", type);
    //toggle.classList.toggle("bx-show");
    //print("test");
}*/

/*function togglePasswordReg() {
    const password = document.querySelector("#password2");
    const toggle = document.querySelector("#togglePassword2");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    toggle.classList.toggle("bx-show");
}

//Chiude il form corrente, viene usato quando si preme il tasto X o quando si preme Escape con la tastiera
function closeForm() {
    const BlurredDiv = document.getElementById("blur");
    BlurredDiv.parentNode.removeChild(BlurredDiv);
    if (currentLog == 1) {
        document.getElementById("wrapper").style.visibility = "hidden";
        toggleLog = false;
    }
    if (currentLog == 2) {
        document.getElementById("wrapper-reg").style.visibility = "hidden";
        toggleReg = false;
    }
    if (currentLog == 3) {
        document.getElementById("wrapper-forgot").style.visibility = "hidden";
        toggleForgot = false;
    }
    currentLog = 0;
}

//Consente di aprire il menu quando la finestra viene rimpicciolita
function toggleMenu() {
    let menu = document.querySelector("#menu-icon");
    let navbar = document.querySelector(".navbar");

    menu.classList.toggle("bx-x");
    navbar.classList.toggle("open");
}

function LoginSimulation()
{
    var email = document.getElementsByName("email");
    var user = "null";
    var pass = document.getElementsByName("password");

    if (email[0].value == "mario.rossi@gmail.com" && pass[0].value == "ciao123") {
        alert("Login Effettuato Correttamente");
        loggedIn = "true";
        user = "Mario";
        var log = document.getElementById("userLogin");
        log.innerHTML = "<i class='bx bxs-user'></i>" + user;
        loggedEmail = email[0].value;
        loggedUsername = "Mario";
        localStorage.setItem("loggedIn", "true");
        localStorage.setItem("loggedUsername", loggedUsername);
        localStorage.setItem("loggedEmail", loggedEmail);
        document.getElementById("logout").style.display = "block";
        document.getElementById("carrello").style.display = "block";
        closeForm();
    }
    else {
        alert("Password Errata");
    }
}

function RegisterSimulation()
{
    var email = document.getElementsByName("email2");
    var user = document.getElementsByName("username");
    var pass = document.getElementsByName("password2");

    alert("Email: " + email[0].value + "\nUsername: " + user[0].value + " \nPassword: " + pass[0].value);
    loggedIn = "true";
    var log = document.getElementById("userLogin");
    log.innerHTML = "<i class='bx bxs-user'></i>" + user[0].value;
    loggedEmail = email[0].value;
    loggedUsername = user[0].value;
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedUsername", loggedUsername);
    localStorage.setItem("loggedEmail", loggedEmail);
    document.getElementById("logout").style.display = "block";
    document.getElementById("carrello").style.display = "block";
    closeForm();
}

function ForgotSimulation()
{
    var email = document.getElementsByName("email3");

    alert("Email: " + email[0].value);
    closeForm();
}

function isLogged() {
    if (loggedIn == "true") {
        var log = document.getElementById("userLogin");
        log.innerHTML = "<i class='bx bxs-user'></i>" + loggedUsername;
        document.getElementById("logout").style.display = "block";
        document.getElementById("carrello").style.display = "block";
    }
}

/*function isLoggedCarrello() {
    if (loggedIn == "true") {
        var log = document.getElementById("userLogin");
        log.innerHTML = "<i class='bx bxs-user'></i>" + loggedUsername;
        document.getElementById("logout").style.display = "block";
        document.getElementById("carrello").style.display = "block";
    }
    else {
        location.replace("./Home.html");
    }
}*/

/*function logout() {
    localStorage.clear();
    alert("Logout Effettuato Correttamente")
    location.reload();
}

function messaggioContatti() {
    alert("Messaggio Inviato, ti risponderemo il prima possibile!\nNOTA: Dacci fino a 72 ore lavorative, sennò inviate un altro messaggio.")
}*/