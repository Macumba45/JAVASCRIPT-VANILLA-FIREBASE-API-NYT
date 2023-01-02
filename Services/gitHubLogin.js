import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessageLoginGithub } from "./showMessageLoginGithub.js";
const buttonRegistergitHub = document.getElementById('buttonRegistergitHub')
const span = document.querySelectorAll('span')

buttonRegistergitHub.addEventListener('click', async () => {
    const provider = new GithubAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        console.log(credentials)
        showMessageLoginGithub('Welcome ' + credentials.user.displayName, 'success')

        for (const icons of span) {
            icons.style.display = 'none'
        }

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);


    } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;


    }



})