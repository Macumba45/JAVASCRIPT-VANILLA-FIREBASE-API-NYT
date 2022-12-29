const spinnerElement = document.getElementById("spinner");
const bookDetailsInfo = document.getElementById('bookBestSeller') // Selecciono el elemento del HTML 
const bookDetailsContainer = bookDetailsInfo.appendChild(document.createElement('div')) // Le añado al "id" padre un elemento hijo DIV
bookDetailsContainer.setAttribute("id", "bookDetails") // Con este metodo le añado un atributo al DIV con ID
bookDetailsContainer.setAttribute("class", "bookDetails")



async function callBookDetails() {

    const selectedListName = localStorage.getItem(localStorageListName)
    const bookDetails = await getBookDetails(selectedListName)

    spinnerElement.setAttribute('class', 'hidden')
    bookDetailsInfo.removeAttribute('class', 'hidden')

    const postAllDetails = document.getElementById('listNames')
    const listNameBook = document.createElement('h4')
    listNameBook.setAttribute("id", "listBookName")
    listNameBook.innerText = selectedListName


    for (const book of bookDetails.results.books) {

        const postBookDetails = document.getElementById('bookDetails')
        const actualDetailBook = postBookDetails.appendChild(document.createElement('div'))
        actualDetailBook.setAttribute("id", "allBooks")


        const titleBooks = book.title
        const allTitleBook = document.createElement('h3')
        allTitleBook.setAttribute("id", "titleBook")
        allTitleBook.innerText = titleBooks

        const imgBook = book.book_image
        const showImg = document.createElement('img')
        showImg.setAttribute("src", imgBook)
        showImg.setAttribute("id", "imgBooks")

        const weekList = book.weeks_on_list
        const elementWeekList = document.createElement('p')
        elementWeekList.setAttribute("id", "weekList")
        elementWeekList.innerText = "Week on list: " + weekList

        const descriptionBook = book.description
        const elementDescription = document.createElement('p')
        elementDescription.setAttribute("id", "descriptionBook")
        elementDescription.innerText = "Description: " + descriptionBook


        const buttonAmazonText = "Buy at"
        const buyAmazon = book.amazon_product_url
        const buttonAmazonContainer = document.createElement('div')
        buttonAmazonContainer.setAttribute("id", "divButton")
        const buttonAmazon = document.createElement('a')
        buttonAmazon.setAttribute("id", "buttonAmazon")
        buttonAmazon.setAttribute("href", buyAmazon)
        const buttonImgElement = document.createElement('img')
        buttonImgElement.setAttribute("id", "amazonPic")
        buttonImgElement.setAttribute('src', '../Img/icons8-amazon-120.png')
        buttonAmazon.innerText = buttonAmazonText
        buttonAmazon.appendChild(buttonImgElement)

        const imgFavBookIcon = document.createElement('img')
        imgFavBookIcon.setAttribute("id", "favBookIcon")
        imgFavBookIcon.setAttribute("class", "classFavBookIcon")
        imgFavBookIcon.setAttribute('src', '../Img/icons8-favorite-100.png')
        buttonAmazonContainer.appendChild(imgFavBookIcon)

        const imgFavBookIconFilled = document.createElement('img')
        imgFavBookIconFilled.setAttribute("id", "favBookIconFilled")
        imgFavBookIconFilled.setAttribute("class", "classFavBookIconFilled")
        imgFavBookIconFilled.setAttribute('src', '../Img/icons8-favorite-100-filled.png')
        buttonAmazonContainer.appendChild(imgFavBookIconFilled)


        actualDetailBook.appendChild(allTitleBook)
        actualDetailBook.appendChild(showImg)
        actualDetailBook.appendChild(elementWeekList)
        actualDetailBook.appendChild(elementDescription)
        buttonAmazonContainer.appendChild(buttonAmazon)
        actualDetailBook.appendChild(buttonAmazonContainer)

        const imgElement = document.getElementById('favBookIcon')
        const imgElementFilled = document.querySelectorAll('#favBookIconFilled')

        for (const hearth of imgElementFilled) {
            hearth.style.display = 'none'

        }
    }



}



callBookDetails()










