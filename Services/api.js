const allListBooks = async () => {

    try {

        const listBooks = await fetch('https://dog.ceo/api/breeds/list/all')
        console.log(await listBooks.json())

    } catch (error) {

        console.log(error)

    }

}

allListBooks()