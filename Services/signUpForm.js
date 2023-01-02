import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const userInfoProfile = 'userInfo'

const signUpform = document.getElementById('formRegister')
const spinnerElement = document.getElementById("spinner");
spinnerElement.style.display = 'none'

signUpform.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const inputs = document.querySelectorAll('input');
    spinnerElement.style.display = 'block'
    formRegister.style.display = 'none'
    inputs.forEach(input => {
        input.value = '';
    });

    try {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)

        window.localStorage.clear()
        window.localStorage.setItem(userInfoProfile, JSON.stringify(userCredentials.user))


        showMessage("Your account have been created " + userCredentials.user.email)

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);



    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            showMessage('This email is already in used', "error")
            spinnerElement.style.display = 'none'
            formRegister.style.display = 'flex'
        } else if (error.code === '') {
            showMessage('Please, insert an email', "error")
            spinnerElement.style.display = 'none'
            formRegister.style.display = 'flex'
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email', "error")
            spinnerElement.style.display = 'none'
            formRegister.style.display = 'flex'
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak', "error")
            spinnerElement.style.display = 'none'
            formRegister.style.display = 'flex'
        } else if (error.code === "auth/internal-error") {
            showMessage('Something went wrong', "error")
            spinnerElement.style.display = 'none'
            formRegister.style.display = 'flex'
        }

    }

})
