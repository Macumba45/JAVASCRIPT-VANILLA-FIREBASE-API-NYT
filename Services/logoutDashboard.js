import { signOut } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'

logout.addEventListener('click', async () => {

    await signOut(auth)
    window.location.assign('../index.html')
    window.localStorage.clear()
})  