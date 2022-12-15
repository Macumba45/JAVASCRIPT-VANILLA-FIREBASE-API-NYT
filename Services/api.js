const fetchListBooks = async () => {

    try {
        // const key = KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB
        const listBooks = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
        console.log(await listBooks.json())

    } catch (error) {

        console.log(error)

    }

}

fetchListBooks()



for (const key of object) {

}











