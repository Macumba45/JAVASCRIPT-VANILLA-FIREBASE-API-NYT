const fetchListBooks = async () => {

    const arrListNames = []

    try {
        const listBooks = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
        const resultadoApi = await listBooks.json()

        for (let i = 0; i < resultadoApi.num_results; i++) {

            const elementoActual = resultadoApi.results[i]
            const listBooksActual = elementoActual.list_name
            arrListNames.push(listBooksActual)

        }


    } catch (error) {

        console.log(error)

    }

    return arrListNames

}


