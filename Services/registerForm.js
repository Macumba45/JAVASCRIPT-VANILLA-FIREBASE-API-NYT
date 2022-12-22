
const divFormContainer = document.getElementById('loginDiv')

const loginContainerForm = document.createElement('form')
loginContainerForm.setAttribute("id", "formRegister")
divFormContainer.appendChild(loginContainerForm)

const imgLogo = document.createElement('img')
imgLogo.setAttribute("src", "./Img/79-790806_new-york-times-logo-new-york-times-png.png")
imgLogo.setAttribute("id", "textLogin")
loginContainerForm.appendChild(imgLogo)

const inputEmail = document.createElement('input')
inputEmail.setAttribute("id", "email")
inputEmail.setAttribute("class", "email")
inputEmail.setAttribute("type", "email")
inputEmail.setAttribute("placeholder", "Insert your email")
inputEmail.setAttribute("autocomplete", "on")
loginContainerForm.appendChild(inputEmail)

const inputPassword = document.createElement('input')
inputPassword.setAttribute("id", "password")
inputPassword.setAttribute("class", "password")
inputPassword.setAttribute("type", "password")
inputPassword.setAttribute("placeholder", "Insert your password")
inputPassword.setAttribute("autocomplete", "on")
loginContainerForm.appendChild(inputPassword)

const alreadyRegistered = document.createElement('a')
const textAlreadyRegistered = "Already registered, click here"
alreadyRegistered.setAttribute("id", "alreadyRegistered")
alreadyRegistered.setAttribute("href", "#")
alreadyRegistered.innerText = (textAlreadyRegistered)
loginContainerForm.appendChild(alreadyRegistered)


const buttonContainer = document.createElement('div')
buttonContainer.setAttribute("id", "buttonLoginDiv")
const buttonRegister = document.createElement('button')
const textButtonRegister = "Register"
buttonRegister.innerText = (textButtonRegister)
buttonRegister.setAttribute("type", "submit")
buttonRegister.setAttribute("id", "buttonRegister")
buttonRegister.setAttribute("class", "buttonLogin")
buttonContainer.appendChild(buttonRegister)
loginContainerForm.appendChild(buttonContainer)
















