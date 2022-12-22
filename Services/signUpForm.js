import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'


const signUpform = document.getElementById('formRegister')

signUpform.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.value = '';
    });

    try {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        showMessage("Your account have been created " + userCredentials.user.email)
        window.location


    } catch (error) {
        console.log(error)

        if (error.code === 'auth/email-already-in-use') {
            showMessage('This email is already in used', "error")
        } else if (error.code === '') {
            showMessage('Please, insert an email', "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email', "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak', "error")
        } else if (error.code === "auth/internal-error") {
            showMessage('Something went wrong', "error")
        }

    }

})
