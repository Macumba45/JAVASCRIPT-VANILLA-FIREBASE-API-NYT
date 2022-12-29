
const divFormContainer = document.getElementById('loginDiv')

const registerContainerForm = document.createElement('form')
registerContainerForm.setAttribute("id", "formRegister")
divFormContainer.appendChild(registerContainerForm)

const imgLogo = document.createElement('img')
imgLogo.setAttribute("src", "./Img/79-790806_new-york-times-logo-new-york-times-png.png")
imgLogo.setAttribute("id", "textLogin")
registerContainerForm.appendChild(imgLogo)

const inputEmail = document.createElement('input')
inputEmail.setAttribute("id", "email")
inputEmail.setAttribute("class", "email")
inputEmail.setAttribute("type", "email")
inputEmail.setAttribute("placeholder", "Insert your email")
inputEmail.setAttribute("autocomplete", "on")
registerContainerForm.appendChild(inputEmail)

const inputPassword = document.createElement('input')
inputPassword.setAttribute("id", "password")
inputPassword.setAttribute("class", "password")
inputPassword.setAttribute("type", "password")
inputPassword.setAttribute("placeholder", "Insert your password")
inputPassword.setAttribute("autocomplete", "on")
registerContainerForm.appendChild(inputPassword)

const alreadyRegistered = document.createElement('a')
const textAlreadyRegistered = "Already Sign up, click here!"
alreadyRegistered.setAttribute("id", "alreadyRegistered")
alreadyRegistered.setAttribute("href", "#")
alreadyRegistered.innerText = (textAlreadyRegistered)
registerContainerForm.appendChild(alreadyRegistered)


const buttonContainer = document.createElement('div')
buttonContainer.setAttribute("id", "buttonLoginDivRegister")
const buttonRegister = document.createElement('button')
// const textButtonRegister = "Register"
// buttonRegister.innerText = (textButtonRegister)
buttonRegister.setAttribute("type", "submit")
buttonRegister.setAttribute("id", "buttonRegister")
buttonRegister.setAttribute("class", "buttonLogin")
buttonContainer.appendChild(buttonRegister)
registerContainerForm.appendChild(buttonContainer)