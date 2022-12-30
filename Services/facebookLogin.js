import { FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessageLoginFacebook } from "./showMessageLoginFacebook.js";
const buttonRegisterFacebook = document.getElementById('buttonRegisterFacebook')
const loginForm = document.getElementById('formLogin')
const userInfoProfileFacebook = 'userInfoFacebook'


const spinnerElement = document.getElementById("spinner");
spinnerElement.style.display = 'none'

buttonRegisterFacebook.addEventListener('click', async () => {
    const provider = new FacebookAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        showMessageLoginFacebook('Welcome ' + credentials.user.displayName, 'success')
        spinnerElement.style.display = 'block'
        loginForm.style.display = 'none'

        window.localStorage.clear()
        window.localStorage.setItem(userInfoProfileFacebook, JSON.stringify(credentials.user))

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);

    } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;


    }

})