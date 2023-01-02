const divFormContainer = document.getElementById('loginDiv')

const loginContainerForm = document.createElement('form')
loginContainerForm.setAttribute("id", "formLogin")
divFormContainer.appendChild(loginContainerForm)

const imgLogo = document.createElement('img')
imgLogo.setAttribute("src", "./Img/79-790806_new-york-times-logo-new-york-times-png.png")
imgLogo.setAttribute("id", "textLogin")
loginContainerForm.appendChild(imgLogo)

const inputEmail = document.createElement('input')
inputEmail.setAttribute("id", "emailLogin")
inputEmail.setAttribute("class", "email")
inputEmail.setAttribute("type", "email")
inputEmail.setAttribute("placeholder", "Insert your email")
inputEmail.setAttribute("autocomplete", "on")
loginContainerForm.appendChild(inputEmail)

const inputPassword = document.createElement('input')
inputPassword.setAttribute("id", "passwordLogin")
inputPassword.setAttribute("class", "password")
inputPassword.setAttribute("type", "password")
inputPassword.setAttribute("placeholder", "Insert your password")
inputPassword.setAttribute("autocomplete", "on")
loginContainerForm.appendChild(inputPassword)

const buttonContainer = document.createElement('div')
buttonContainer.setAttribute("id", "buttonLoginDiv")
const buttonRegister = document.createElement('button')
buttonRegister.setAttribute("type", "submit")
buttonRegister.setAttribute("id", "buttonLogin")
buttonRegister.setAttribute("class", "buttonLogin")
buttonContainer.appendChild(buttonRegister)
loginContainerForm.appendChild(buttonContainer)

const hrDivisor = document.createElement('hr')
loginContainerForm.appendChild(hrDivisor)

const buttonContainerGoogle = document.createElement('div')
buttonContainerGoogle.setAttribute("id", "buttonLoginDivGoogle")
const buttonRegisterGoogle = document.createElement('a')
buttonRegisterGoogle.setAttribute("type", "submit")
buttonRegisterGoogle.setAttribute("id", "buttonRegisterGoogle")
const buttonImgGoogle = document.createElement('img')
buttonImgGoogle.setAttribute("id", "googleLogin")
buttonImgGoogle.setAttribute('src', '../Img/googlrLogin.png')

buttonContainerGoogle.appendChild(buttonRegisterGoogle)
loginContainerForm.appendChild(buttonContainerGoogle)
buttonRegisterGoogle.appendChild(buttonImgGoogle)

const buttonContainergitHub = document.createElement('div')
buttonContainergitHub.setAttribute("id", "buttonLoginDivgitHub")
const buttonRegistergitHub = document.createElement('a')
buttonRegistergitHub.setAttribute("type", "submit")
buttonRegistergitHub.setAttribute("id", "buttonRegistergitHub")
const buttonImggitHub = document.createElement('img')
buttonImggitHub.setAttribute("id", "gitHubLogin")
buttonImggitHub.setAttribute('src', '../Img/gitHub.png')

buttonContainergitHub.appendChild(buttonRegistergitHub)
loginContainerForm.appendChild(buttonContainergitHub)
buttonRegistergitHub.appendChild(buttonImggitHub)

const buttonContainerFacebook = document.createElement('div')
buttonContainerFacebook.setAttribute("id", "buttonLoginDivFacebook")
const buttonRegisterFacebook = document.createElement('a')
buttonRegisterFacebook.setAttribute("type", "submit")
buttonRegisterFacebook.setAttribute("id", "buttonRegisterFacebook")
const buttonImgFacebook = document.createElement('img')
buttonImgFacebook.setAttribute("id", "facebookLogin")
buttonImgFacebook.setAttribute('src', '../Img/facebookSignIn.png')

buttonContainerFacebook.appendChild(buttonRegisterFacebook)
loginContainerForm.appendChild(buttonContainerFacebook)
buttonRegisterFacebook.appendChild(buttonImgFacebook)

const hrDivisorLast = document.createElement('hr')
loginContainerForm.appendChild(hrDivisorLast)

const alreadyRegistered = document.createElement('a')
const textAlreadyRegistered = "If you are not Sign Up, click here!"
alreadyRegistered.setAttribute("id", "notRegistered")
alreadyRegistered.setAttribute("href", "#")
alreadyRegistered.innerText = (textAlreadyRegistered)
loginContainerForm.appendChild(alreadyRegistered)




















