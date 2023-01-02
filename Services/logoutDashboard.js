import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

// const spinnerElement = document.getElementById("spinner");



logout.addEventListener('click', async () => {

    // const allDOM = document.querySelectorAll('header,nav,div,footer')
    // for (const elementDOM of allDOM) {
    //     elementDOM.style.display = 'none'
    // }
    // spinnerElement.style.display = 'block'

    await signOut(auth)
    window.location.assign('../index.html')
    window.localStorage.clear()






})  