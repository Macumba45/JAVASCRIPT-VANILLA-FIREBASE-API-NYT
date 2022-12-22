import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";



const loginForm = document.getElementById('formLogin')

loginForm.addEventListener('submit', async (e) => {

    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    // const inputs = document.querySelectorAll('input');
    console.log(email, password)

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
        });

    // inputs.forEach(input => {
    //     input.value = '';
    // });



})
