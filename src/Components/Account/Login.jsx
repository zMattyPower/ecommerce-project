import React from 'react';
import { useState } from "react";
import { Link } from 'react-router-dom';
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import { useLoginContext } from '../GlobalVariables'; // Import the context hook
import './Login.css';

const Login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [result, setResult] = useState("");
    const { useLogin, setUseLogin } = useLoginContext(); // Access the useLogin state


    const toggleLogin = () => {
        setUseLogin(!useLogin);
    };
    

    const togglePasswordVisibility = () => {
        setPasswordShown(!passwordShown);
    };
    
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
        <div className='blur' id='blur' onClick={toggleLogin}></div>
        <div className="wrapper" id="wrapper">
            <form name="frmLogin" id="frmLogin"
                action="http://localhost:8000/login.php"
                method="post"
                onSubmit={(event) => handleSubmit(event)}
            >
                <button type="button" className="backLogin" onClick={toggleLogin}>✕</button>
                <h1><img src={require("./Login_Icon.png")} alt='login' width="100" draggable="false"/></h1>

                <div className="input-box">
                    <FontAwesomeIcon icon={faEnvelope} id="login"/>
                    <input type="email" placeholder="E-Mail" id="email" name="email"
                    required/>
                </div>
                
                <div className="remember-forgot">
                    <a href='about:blank'>Password Dimenticata?</a>
                </div>

                <div className="input-box">
                    <FontAwesomeIcon icon={faLock} id="login"/>
                    <input type={passwordShown ? "text" : "password"} id="pass" name="pass" placeholder="Password" required/>
                    <FontAwesomeIcon
                        icon={passwordShown ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        id='eye-icon'
                    />
                </div>
                
                <button type="submit" className="btn">Accedi</button>

                {result}

                <div className="register-link">
                    <hr/>
                    <p><a href='about:blank' onClick={toggleLogin}><Link to="/registrazione">Crea un account gratuitamente</Link><i className='bx bx-chevrons-right'></i></a></p>
                </div>
            </form>
        </div>
        </>
  );
};

export default Login

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
}

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