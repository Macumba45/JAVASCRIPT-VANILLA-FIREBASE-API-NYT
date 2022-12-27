import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

const logout = document.querySelector('#logout')

logout.addEventListener('click', async () => {

    await signOut(auth)
    const loginForm = document.querySelector('#formLogin')
    const emailNavBar = document.getElementById('emailNavBar')
    const spinnerElement = document.getElementById("spinner");
    loginForm.style.display = 'flex'
    emailNavBar.style.display = 'none'
    spinnerElement.style.display = 'none'


})


