import { GithubAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessageLoginGithub } from "./showMessageLoginGithub.js";
const buttonRegistergitHub = document.getElementById('buttonRegistergitHub')
const userInfoProfileGit = 'userInfoGit'

const span = document.querySelectorAll('span')
const loginForm = document.getElementById('formLogin')
const spinnerElement = document.getElementById("spinner");
spinnerElement.style.display = 'none'

buttonRegistergitHub.addEventListener('click', async () => {
    const provider = new GithubAuthProvider()

    try {
        const credentials = await signInWithPopup(auth, provider)
        showMessageLoginGithub('Welcome ' + credentials.user.providerData[0].email, 'success')
        provider.addScope("displayName");
        console.log(provider.addScope("displayName"));
        spinnerElement.style.display = 'block'
        loginForm.style.display = 'none'

        for (const icons of span) {
            icons.style.display = 'none'
        }


        window.localStorage.clear()
        window.localStorage.setItem(userInfoProfileGit, JSON.stringify(credentials.user))

        setTimeout(function () {

            window.location.assign('./views/dashboard.html')

        }, 2000);


    } catch (error) {
        let errorCode = error.code;
        let errorMessage = error.message;


    }



})