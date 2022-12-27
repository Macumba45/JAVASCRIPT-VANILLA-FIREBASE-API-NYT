const loadDocumentHTML = document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.querySelector('#formRegister')
    const loginForm = document.querySelector('#formLogin')

    registerForm.style.display = 'none'

    document.querySelector('#alreadyRegistered').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'none'
        loginForm.style.display = 'flex'

    });

    document.querySelector('#notRegistered').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'flex'
        loginForm.style.display = 'none'
    });

    document.querySelector('#navLogin').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'none'
        loginForm.style.display = 'flex'

    });

    document.querySelector('#navRegister').addEventListener("click", (e) => {
        e.preventDefault()
        registerForm.style.display = 'flex'
        loginForm.style.display = 'none'

    });




})