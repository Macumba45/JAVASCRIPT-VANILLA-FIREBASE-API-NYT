const localStorageKeyBooks = 'books'
const localStorageKeyOldDate = "oldDate"

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





