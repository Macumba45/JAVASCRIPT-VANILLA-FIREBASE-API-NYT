import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

onAuthStateChanged(auth, async (user) => {

    loginCheck(user)
    console.log(user)

})




const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')


export const loginCheck = user => {

    if (user) {

        loggedOutLink.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')


    } else {


        loggedOutLink.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')


        if (document.URL.indexOf("profile.html") >= 0) {

            const navDashboard = document.getElementById('navDashboard')
            const profileContainer = document.getElementById('backProfile')
            navDashboard.style.display = 'none'
            profileContainer.style.display = 'none'

            const body = document.querySelector('body')
            const textElement = document.createElement('p')
            textElement.setAttribute("id", "textElement")
            const loginText = "Log for watch the app"
            textElement.innerText = (loginText)
            body.appendChild(textElement)

            const alreadyRegistered = document.createElement('a')
            const textAlreadyRegistered = "If you are not logged, click here!"
            alreadyRegistered.setAttribute("id", "controlError")
            alreadyRegistered.setAttribute("href", "../index.html")
            alreadyRegistered.innerText = (textAlreadyRegistered)
            body.appendChild(alreadyRegistered)

        } else if (document.URL.indexOf("details.html") >= 0) {



            window.localStorage.clear()

            const header = document.getElementById('cabezera')
            const footer = document.getElementById('footer')
            header.style.display = 'none'
            footer.style.display = 'none'

            const body = document.querySelector('body')
            const textElement = document.createElement('p')
            textElement.setAttribute("id", "textElement")
            const loginText = "Log for watch the app"
            textElement.innerText = (loginText)
            body.appendChild(textElement)

            const alreadyRegistered = document.createElement('a')
            const textAlreadyRegistered = "If you are not logged, click here!"
            alreadyRegistered.setAttribute("id", "controlError")
            alreadyRegistered.setAttribute("href", "../index.html")
            alreadyRegistered.innerText = (textAlreadyRegistered)
            body.appendChild(alreadyRegistered)



        }





    }

}
