const loggedOutLink = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')
const form = document.getElementById('formRegister')



export const loginCheck = user => {

    if (user) {

        loggedOutLink.forEach(link => link.style.display = 'none')
        loggedInLinks.forEach(link => link.style.display = 'block')
        form.style.display = 'none'



    } else {

        loggedOutLink.forEach(link => link.style.display = 'block')
        loggedInLinks.forEach(link => link.style.display = 'none')



    }

}