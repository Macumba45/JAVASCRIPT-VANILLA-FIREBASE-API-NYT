// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"

// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCNMRzUxZz83eKbMpCZxLHtHS7zroyU_5o",
    authDomain: "bookapi-2e7aa.firebaseapp.com",
    projectId: "bookapi-2e7aa",
    storageBucket: "bookapi-2e7aa.appspot.com",
    messagingSenderId: "954996866219",
    appId: "1:954996866219:web:1da12c1f2e228c9de3cbee"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
