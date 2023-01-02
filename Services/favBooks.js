const favBooksList = "favBooksList"
setTimeout(function () {

    const bookDetailsObject = JSON.parse(window.localStorage.getItem(localStorageKeyDetails));
    const booksObject = bookDetailsObject.books
    const imgElement = document.getElementsByClassName('classFavBookIcon')
    const imgElementFilled = document.getElementsByClassName('classFavBookIconFilled')

    for (const booksTitle of booksObject) {

        const allBookTitles = [booksTitle.title]

        const imgElement = document.querySelectorAll('#favBookIcon')

        allBookTitles.forEach(title => {
            console.log([title])

            for (let i = 0; i < imgElement.length; i++) {

                const imgElementFilled = document.getElementsByClassName('classFavBookIconFilled')

                imgElement[i].addEventListener('click', () => {
                    imgElement[i].style.display = 'none'
                    imgElementFilled[i].style.display = 'flex'

                    if (imgElementFilled[i].style.display === 'flex') {
                        window.localStorage.setItem(favBooksList, imgElementFilled[i].style.display === 'flex')
                        imgElementFilled[i].addEventListener('click', () => {
                            imgElement[i].style.display = 'flex'
                            imgElementFilled[i].style.display = 'none'
                        })
                    }
                })
            }

        });

    }
}, 1500);



