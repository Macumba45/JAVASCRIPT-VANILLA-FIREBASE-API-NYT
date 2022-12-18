const bookDetailsInfo = document.getElementById('bookBestSeller') // Selecciono el elemento del HTML 
const bookDetailsContainer = bookDetailsInfo.appendChild(document.createElement('div')) // Le añado al "id" padre un elemento hijo DIV
bookDetailsContainer.setAttribute("id", "bookDetails") // Con este metodo le añado un atributo al DIV con ID
bookDetailsContainer.setAttribute("class", "bookDetails")






async function callBookDetails() {

    const selectedListName = localStorage.getItem(localStorageListName)
    const bookDetails = await getBookDetails(selectedListName)

    const postAllDetails = document.getElementById('listNames')
    const listNameBook = document.createElement('h4')
    listNameBook.setAttribute("id", "listBookName")
    listNameBook.innerText = selectedListName

    const buttonBack = document.createElement('input')
    buttonBack.setAttribute("type", "button")
    buttonBack.setAttribute("value", "Go back")
    buttonBack.setAttribute("onclick", "history.back()")
    postAllDetails.appendChild(buttonBack)

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
        elementDescription.innerText = descriptionBook

        const buttonAmazonText = "Watch in Amazon"
        const buyAmazon = book.amazon_product_url
        const buttonAmazon = document.createElement('a')
        buttonAmazon.setAttribute("id", "buttonAmazon")
        buttonAmazon.setAttribute("href", buyAmazon)
        buttonAmazon.innerText = buttonAmazonText

        actualDetailBook.appendChild(allTitleBook)
        actualDetailBook.appendChild(showImg)
        actualDetailBook.appendChild(elementWeekList)
        actualDetailBook.appendChild(elementDescription)
        actualDetailBook.appendChild(buttonAmazon)

    }

    postAllDetails.appendChild(listNameBook)


}

callBookDetails()










