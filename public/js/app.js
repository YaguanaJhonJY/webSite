document.getElementById("btn-register").addEventListener("click", register);
document.getElementById("btn-sesion").addEventListener("click", sesion);

var cont_login_register = document.querySelector("#contenido-login-register");

var form_login = document.querySelector("#form-login");
var form_register = document.querySelector("#form-register");

var cont_sesion = document.querySelector("#contenido-login-question-sesion");
var cont_register = document.querySelector("#contenido-login-question-register");

function register() {
  form_register.style.display = "block";
  cont_login_register.style.left = "410px";
  form_login.style.display = "none";
  cont_sesion.style.opacity = "1";
  cont_register.style.opacity = "0";
}

function sesion() {
  form_register.style.display = "none";
  cont_login_register.style.left = "20px";
  form_login.style.display = "block";
  cont_sesion.style.opacity = "0";
  cont_register.style.opacity = "1";
}
