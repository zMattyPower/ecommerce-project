
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
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

import './Register.css';

const Register = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [result, setResult] = useState("");
    const { useLogin, setUseLogin } = useLoginContext();

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            password: e.target.password.value,
            d_nascita: e.target.d_nascita.value,
            tel: e.target.tel.value,
            trattamento: e.target.trattamento.checked ? 'on' : 'off'
        };
        
        try {
            const response = await axios.post('http://localhost:8000/register.php', formData);
            setResult(response.data.message);
        } catch (error) {
            setResult('Errore durante la registrazione: ' + error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="form_r" id="form_r">
                <form name="frmLogin" id="frmLogin"
                    action="http://localhost:8000/register.php"
                    method="post"
                    onSubmit={(event) => handleSubmit(event)}>
                    <h1>Registrazione</h1>
                    <div className="due_colonne">
                        <div className="input-box">
                            <FontAwesomeIcon icon={faUser} id="login" />
                            <input type="text" placeholder="Nome" id="name" name="name" required />
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faUser} id="login" />
                            <input type="text" placeholder="Cognome" id="lastname" name="lastname" required />
                        </div>
                    </div>
                    <div className="due_colonne">
                        <div className="input-box">
                            <FontAwesomeIcon icon={faEnvelope} id="login" />
                            <input type="email" placeholder="E-Mail" id="email" name="email" required />
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faLock} id="login" />
                            <input type={passwordShown ? "text" : "password"} id="password" name="password" placeholder="Password" required />
                            <FontAwesomeIcon
                                icon={passwordShown ? faEyeSlash : faEye}
                                onClick={togglePasswordVisibility}
                                id='eye-icon'
                            />
                        </div>
                    </div>
                    <div className="due_colonne">
                        <div className="input-box">
                            <FontAwesomeIcon icon={faUser} id="login" />
                            <input type="date" id="d_nascita" name="d_nascita" required />
                        </div>
                        <div className="input-box">
                            <FontAwesomeIcon icon={faPhone} id="login" />
                            <input type="tel" placeholder="Telefono" id="tel" name="tel" required />
                        </div>
                    </div>
                    <div className="checkbox-box">
                        <input type="checkbox" id="trattamento" name="trattamento" required />
                        <label htmlFor="trattamento">Termini e condizioni</label>
                    </div>
                    <button type="submit" className="btn">Registrati</button>
                    {result && <div className="result-message">{result}</div>}
                    <div className="register-link">
                        <hr />
                        <p><Link to="/">Hai già un account? Fai il login</Link></p>
                    </div>
                </form>
            </div>
            <Footer />
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