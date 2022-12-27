import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { showMessageLogin } from './showMessageLogin.js'

const userInfoProfile = 'userInfo'

const loginForm = document.getElementById('formLogin')
const spinnerElement = document.getElementById("spinner");
spinnerElement.style.display = 'none'

loginForm.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.getElementById('emailLogin').value
    const password = document.getElementById('passwordLogin').value
    const inputs = document.querySelectorAll('input');
    spinnerElement.style.display = 'block'
    loginForm.style.display = 'none'

    try {
        const auth = getAuth();
        const userCredentialsLogin = await signInWithEmailAndPassword(auth, email, password)

        window.localStorage.clear()
        window.localStorage.setItem(userInfoProfile, JSON.stringify(userCredentialsLogin.user))

        inputs.forEach(input => {
            input.value = '';
        });

        showMessageLogin("You have signed with your email: " + userCredentialsLogin.user.email)

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);

    } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === "auth/invalid-email") {
            showMessageLogin("Invalid Email. Please, try again.", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'
        } else if (errorCode === "auth/wrong-password") {
            showMessageLogin("Password incorrect", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'
        } else if (errorCode === "auth/too-many-requests") {
            showMessageLogin("Too many failed attempts. Try it again later", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'
        } else if (errorCode = "auth/user-not-found") {
            showMessageLogin("User not found, please try to log again.", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'

        } else if (errorCode === "auth/invalid-email") {
            showMessageLogin("Invalid Email. Please, try again.", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'

        } else if (errorCode === "auth/user-not-found") {
            showMessageLogin("User do not exists", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'
        } else if (errorCode === "auth/internal-error") {
            showMessageLogin("Internal error. Please, try again", "error")
            spinnerElement.style.display = 'none'
            loginForm.style.display = 'flex'

        }


    }


})
