const fetchListBooks = async () => {

    let arrListNames = JSON.parse(window.localStorage.getItem("arrListNames"));

    if (arrListNames === null) {

        arrListNames = []

        try {
            const listBooks = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')

            const resultadoApi = await listBooks.json()


            for (let i = 0; i < resultadoApi.num_results; i++) {

                const elementoActual = resultadoApi.results[i]
                const listBooksActual = elementoActual.list_name
                arrListNames.push(listBooksActual)
            }
            window.localStorage.setItem("arrListNames", JSON.stringify(arrListNames))

        } catch (error) {

            console.log(error)

        }

    }
    return arrListNames

}


const fetchOldBooks = async () => {

    arrOldDates = []

    try {

        const oldDateBooks = await fetch('https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KF9ASDfmvWA3uXGbVU3FIPT5iWhQoPsB')
        const oldDate = await oldDateBooks.json()
        // console.log(oldDate)

        for (let i = 0; i < oldDate.num_results; i++) {

            const oldDateCurrent = oldDate.results[i]
            // console.log(oldDateCurrent)
            const listOldDate = oldDateCurrent.oldest_published_date
            console.log(listOldDate)
            arrOldDates.push(listOldDate)
            // console.log(arrOldDates[i])
        }


    } catch (error) {

        console.log(error)

    }
}

fetchOldBooks()


