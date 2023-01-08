import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessageLoginGoogle } from "./showMessageLoginGoogle.js";

const userInfoProfileGoogle = 'userInfoGoogle'

const buttonRegisterGoogle = document.getElementById('buttonRegisterGoogle')
const loginForm = document.getElementById('formLogin')

const spinnerElement = document.getElementById("spinner");
const span = document.querySelectorAll('span')
spinnerElement.style.display = 'none'

buttonRegisterGoogle.addEventListener('click', async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope("email");

    try {
        const credentials = await signInWithPopup(auth, provider)
        showMessageLoginGoogle('Welcome ' + credentials.user.displayName, 'success')
        spinnerElement.style.display = 'block'
        loginForm.style.display = 'none'

        for (const icons of span) {
            icons.style.display = 'none'
        }

        window.localStorage.clear()
        window.localStorage.setItem(userInfoProfileGoogle, JSON.stringify(credentials.user))

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);


    } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;
        // console.log(errorCode)
        /*
            Corrección
            Debemos añadir un flujo al "catch" ya que la app no sabra como actuar cuando falle la llamada
        */
    }

})