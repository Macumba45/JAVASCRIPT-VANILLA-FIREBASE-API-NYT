// import { } from "../Services/firebase.js";
// import { db } from '../Services/firebase.js'

setTimeout(function () {

    const favBooksList = "favBooksList"
    let categorieName = window.localStorage.getItem(localStorageListName);
    const bookDetailsObject = JSON.parse(window.localStorage.getItem(localStorageKeyDetails + categorieName));
    const booksObject = bookDetailsObject.results.books

    let arrBookFavs = []

    arrBookFavs = JSON.parse(window.localStorage.getItem(favBooksList))

    const imgElement = document.getElementsByClassName('classFavBookIcon')
    const imgElementFilled = document.getElementsByClassName('classFavBookIconFilled')

    if (arrBookFavs !== null) {

        for (let i = 0; i < booksObject.length; i++) {

            for (let j = 0; j < arrBookFavs.length; j++) {

                if (arrBookFavs[j].title === booksObject[i].title) {

                    imgElementFilled[i].style.display = 'flex'
                    imgElement[i].style.display = 'none'
                }
            }
        }

    } else {

        arrBookFavs = []
    }

    for (let i = 0; i < imgElement.length; i++) {

        let title = booksObject[i].title

        imgElement[i].addEventListener('click', async () => {
            imgElement[i].style.display = 'none'
            imgElementFilled[i].style.display = 'flex'
            // try {
            //     const docRef = await addDoc(collection(db, "usersFavBooks"), {
            //         title: title,

            //     });
            //     console.log("Document written with ID: ", docRef.id);
            // } catch (e) {
            //     console.error("Error adding document: ", e);
            // }
            arrBookFavs.push(booksObject[i])
            window.localStorage.setItem(favBooksList, JSON.stringify(arrBookFavs))
        })

        imgElementFilled[i].addEventListener('click', () => {
            imgElement[i].style.display = 'flex'
            imgElementFilled[i].style.display = 'none'
            arrBookFavs = arrBookFavs.filter(books => books.title !== title)
            window.localStorage.setItem(favBooksList, JSON.stringify(arrBookFavs))
        })
    }

}, 1500);









