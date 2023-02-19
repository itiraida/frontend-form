
const formulario = document.getElementById('form_inputs');

var expressions_name =/^[A-Za-zÀ-ÿ\s]{1,}$/;
var expressions_email =/^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z0-9-.]$/;
// var expressions_password= /^{1,8}$/;

var nameValue = document.getElementById('name');
var emailValue  = document.getElementById('email');
var passwordValue  = document.getElementById('password');
var password_confirmationValue  = document.getElementById('password_confirmation');


var nameMessages = document.getElementById('wrongNameMessages');
var emailMessages = document.getElementById('wrongEmailMessages');
var passwordMessages= document.getElementById('wrongPasswordMessages');
var passwordMessagesConfirm = document.getElementById('wrongConfirmationPasswordMessages');


function checkName() {

    if (!nameValue.value) {
        nameMessages.style.display = "block"
        nameMessages.innerHTML = 'Rellene este campo';
        nameValue.classList.add('text-name')
    } else if
        (!expressions_name.test(nameValue.value)) {
        nameValue.setAttribute("valid", false)
        nameMessages.style.display = "block"
        nameMessages.innerHTML = 'Nombre inv&aacute;lido';
        nameValue.classList.add('text-name')
    } 
};

function checkEmail() {
    if (!emailValue.value) {
        emailMessages.style.display = "block"
        emailMessages.innerHTML = 'Rellene este campo';
        emailValue.classList.add('text-email')
    } else if
        (!expressions_email.test(emailValue.value)) {
        emailValue.setAttribute("valid", false)
        emailMessages.style.display = "block"
        emailMessages.innerHTML = 'Email inv&aacute;lido';
        emailValue.classList.add('text-email')
    }  else {
        emailMessages.style.display = "none"
    }
};

function checkPassword () {
    if (!passwordValue.value) {
        passwordMessages.style.display = "block"
        passwordMessages.innerHTML = 'Rellene este campo';
        passwordValue.classList.add('text-password')
    } else if
        (!expressions_password.test(passwordValue.value)) {
        passwordValue.setAttribute("valid", false)
        passwordMessages.style.display = "block"
        passwordMessages.innerHTML = 'Debe contener como máximo 8 carácteres';
        passwordMessages.classList.add('text-password')
    } else {
        passwordMessages.style.display = "none"
    }
};


function checkpasswordConfirm() {
    if (!password_confirmationValue.value) {
        passwordMessagesConfirm.style.display = "block"
        passwordMessagesConfirm.innerHTML = 'Rellene este campo';
        password_confirmationValue.classList.add('text-passwordConfirm')
    } else if
        (password_confirmationValue.value != passwordValue.value) {
        password_confirmationValue.setAttribute("valid", false)
        passwordMessagesConfirm.style.display = "block"
        passwordMessagesConfirm.innerHTML = 'Las contraseñas no coinciden';
        password_confirmationValue.classList.add('text-passwordConfirm')
    } else {
        passwordMessagesConfirm.style.display = "none"
    

formulario.onsubmit = function (e) {
    e.preventDefault();
    this.checkValidity() ? (alert('La inscripción se ha completado correctamente'))
        : (
            checkName(),
            checkEmail(),
            checkPassword(),
            validarpasswordConfirm()
         )};
    } 
    }
    
    