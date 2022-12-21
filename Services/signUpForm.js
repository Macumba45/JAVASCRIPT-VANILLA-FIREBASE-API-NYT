import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'


const signUpform = document.getElementById('form')

signUpform.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    // console.log(email, password)

    try {

        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

    } catch (error) {

        if (error.code === 'auth/email-already-in-use') {
            alert('This email is already in used')
        } else if (error.code === 'auth/invalid-email') {
            alert('Invalid email')
        } else if (error.code === 'auth/weak-password') {
            alert('Password is too weak')
        } else if (error.code) {
            alert('Something went wrong')
        }





    }



})

// let userLogin = () => {

//     const email = document.getElementById('email').value
//     const password = document.getElementById('password').value
//     // console.log("email=" + ' ' + email + ' ' + "password=" + ' ' + password)


//     const auth = getAuth();
//     createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode)
//             console.log(errorMessage)
//             // ..
//         });

// }