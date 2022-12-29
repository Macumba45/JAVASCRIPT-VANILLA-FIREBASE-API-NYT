const localStorageKeyBooks = 'books'
const localStorageKeyDetails = 'bookDetails'
const localStorageListName = 'currentListName'

const fetchListBooks = async () => {

    let list = JSON.parse(window.localStorage.getItem(localStorageKeyBooks));

    if (!list) {
        try {
            const response = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
            const bookLists = await response.json()
            if (bookLists && bookLists.num_results) {
                window.localStorage.setItem(localStorageKeyBooks, JSON.stringify(bookLists.results))
                list = bookLists.results

            }
        } catch (error) {

        }
    }

    return list
}


const getBookDetails = async (listName) => {

    const header = document.getElementById('listbook')
    const headerH1 = document.createElement('h1')
    headerH1.setAttribute("id", "listbook")
    const headertitle = listName
    headerH1.innerText = headertitle
    header.appendChild(headerH1)

    JSON.parse(window.localStorage.getItem(localStorageKeyDetails));

    try {
        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB`)
        const bookDetails = await response.json()
        window.localStorage.setItem(localStorageKeyDetails, JSON.stringify(bookDetails.results))
        return bookDetails
    } catch (error) {

    }

}














