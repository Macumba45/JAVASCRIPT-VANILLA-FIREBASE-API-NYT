const loadDocumentHTML = document.addEventListener("DOMContentLoaded", () => {

    const registerForm = document.querySelector('#formRegister')
    const loginForm = document.querySelector('#formLogin')

    registerForm.style.display = 'none'

    document.querySelector('#alreadyRegistered').addEventListener("click", (e) => {
        function fade() {
            const loginForm = document.querySelector('#formLogin')
            e.preventDefault()
            registerForm.style.display = 'none'
            loginForm.style.display = 'flex'
            let i = 0;
            loginForm.style.opacity = 0;
            let k = window.setInterval(function () {
                if (i >= 10) {
                    clearInterval(k);
                } else {
                    loginForm.style.opacity = i / 10;
                    i++;
                }
            }, 30);
        };
        fade()

    });

    document.querySelector('#notRegistered').addEventListener("click", (e) => {

        function fade() {
            const registerForm = document.querySelector('#formRegister')
            e.preventDefault()
            registerForm.style.display = 'flex'
            loginForm.style.display = 'none'
            let i = 0;
            registerForm.style.opacity = 0;
            let k = window.setInterval(function () {
                if (i >= 10) {
                    clearInterval(k);
                } else {
                    registerForm.style.opacity = i / 10;
                    i++;
                }
            }, 30);
        };
        fade()
    });

    document.querySelector('#navLogin').addEventListener("click", (e) => {

        function fade() {
            const loginForm = document.querySelector('#formLogin')
            e.preventDefault()
            registerForm.style.display = 'none'
            loginForm.style.display = 'flex'
            let i = 0;
            loginForm.style.opacity = 0;
            let k = window.setInterval(function () {
                if (i >= 10) {
                    clearInterval(k);
                } else {
                    loginForm.style.opacity = i / 10;
                    i++;
                }
            }, 30);
        };
        fade()

    });

    document.querySelector('#navRegister').addEventListener("click", (e) => {

        function fade() {
            const registerForm = document.querySelector('#formRegister')
            e.preventDefault()
            registerForm.style.display = 'flex'
            loginForm.style.display = 'none'
            let i = 0;
            registerForm.style.opacity = 0;
            let k = window.setInterval(function () {
                if (i >= 10) {
                    clearInterval(k);
                } else {
                    registerForm.style.opacity = i / 10;
                    i++;
                }
            }, 30);
        };
        fade()

    });

})