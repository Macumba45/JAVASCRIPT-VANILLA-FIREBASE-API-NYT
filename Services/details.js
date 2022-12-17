const bookDetailsInfo = document.getElementById('bookBestSeller') // Selecciono el elemento del HTML 
const bookDetailsContainer = bookDetailsInfo.appendChild(document.createElement('div')) // Le añado al "id" padre un elemento hijo DIV
bookDetailsContainer.setAttribute("id", "bookDetails") // Con este metodo le añado un atributo al DIV con ID
bookDetailsContainer.setAttribute("class", "bookDetails")



async function callBookDetails() {

    const selectedListName = localStorage.getItem(localStorageListName)
    const bookDetails = await getBookDetails(selectedListName)
    console.log(bookDetails.results.books)


    const postAllDetails = document.getElementById('listNames')
    const listNameBook = document.createElement('h4')
    listNameBook.setAttribute("id", "listBookName")
    listNameBook.innerText = selectedListName
    postAllDetails.appendChild(listNameBook)


}

callBookDetails()










