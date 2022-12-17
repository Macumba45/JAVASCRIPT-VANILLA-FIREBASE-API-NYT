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
            console.log(error)
        }
    }



    return list
}




const getBookDetails = async (listName) => {

    try {

        const response = await fetch(`https://api.nytimes.com/svc/books/v3/lists/current/${listName}.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB`)
        const bookDetails = await response.json()
        return bookDetails
    } catch (error) {
        console.log(error)
    }
}










