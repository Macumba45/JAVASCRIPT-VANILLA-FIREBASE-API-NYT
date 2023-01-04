setTimeout(function () {

    const favBooksList = "favBooksList"

    const bookDetailsObject = JSON.parse(window.localStorage.getItem(localStorageKeyDetails));
    const booksObject = bookDetailsObject.books

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

        imgElement[i].addEventListener('click', () => {
            imgElement[i].style.display = 'none'
            imgElementFilled[i].style.display = 'flex'
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









