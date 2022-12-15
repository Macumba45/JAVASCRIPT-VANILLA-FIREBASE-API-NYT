const allListBooks = async () => {

    try {
        // const key = KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB
        const listBooks = await fetch('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
        console.log(await listBooks.json())

    } catch (error) {

        console.log(error)

    }

}

allListBooks()