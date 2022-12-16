const allBooks = document.getElementById('allListBooks') // Selecciono el elemento del HTML 
const prueba = allBooks.appendChild(document.createElement('div')) // Le añado al "id" padre un elemento hijo DIV
prueba.setAttribute("id", "listBooks") // Con este metodo le añado un atributo al DIV con ID
prueba.setAttribute("class", "listBooks")


async function postAllData() {

    const postAllListBooks = document.getElementById('listBooks')
    const arrListNames = await fetchListBooks()

    for (let i = 0; i < arrListNames.length; i++) {

        const currentName = arrListNames[i]
        const actualListElementContainer = document.createElement('div')
        actualListElementContainer.setAttribute("id", "listBooksHijo")
        actualListElementContainer.setAttribute("class", "listBooksHijo")

        const actualListElementTitle = document.createElement('p')
        actualListElementTitle.setAttribute("id", "tituloLibro")
        actualListElementContainer.appendChild(actualListElementTitle)
        actualListElementTitle.innerText = currentName
        postAllListBooks.appendChild(actualListElementContainer)

        console.log(actualListElementContainer)
    }



    const postOldDates = document.getElementById('listBooksHijo')
    const arrOldDates = await fetchOldBooks()


    for (let i = 0; i < arrOldDates.length; i++) {
        const oldDateCurrent = arrOldDates[i]
        const actualListElementDate = document.createElement('p')
        actualListElementDate.setAttribute("id", "oldDatePArrafo")
        actualListElementDate.innerText = ("Fecha vieja:" + ' ' + oldDateCurrent)
        postOldDates.appendChild(actualListElementDate)
    }

}

postAllData()


// async function postOldDates() {

//     const postOldDates = document.querySelector("#listBooks")
//     console.log(postOldDates)
//     const arrOldDates = await fetchOldBooks()
//     // console.log(postOldDates)

//     for (let i = 0; i < arrOldDates.length; i++) {
//         const oldDateCurrent = arrOldDates[i]


//         // const actualDateElementContainer = document.createElement('div')
//         // actualDateElementContainer.setAttribute("id", "oldDate")
//         const actualListElementDate = document.createElement('p')
//         actualListElementDate.setAttribute("id", "oldDatePArrafo")
//         actualListElementDate.innerText = oldDateCurrent
//         postOldDates.appendChild(actualListElementDate)

//         // actualListElementDate.appendChild(actualDateElementContainer)
//         // actualDateElementContainer.appendChild(postOldDates)

//         // console.log(actualDateElementContainer)



//     }
// }


// postOldDates()



// const tituloh2 = document.getElementById('titleBooks')
// const titulo = document.createElement('div')
// console.log(titulo)
// titulo.appendChild(tituloh2)
// // prueba.setAttribute("id", "h2")






// const bestSeller = document.createElement('h2')
// allBooks.appendChild(bestSeller)
// const text = document.createTextNode('Prueba')
// bestSeller.appendChild(text)
// allBooks.append('PRUEBA SEGUIDA', document.createElement('p'))
// allBooks.append('PRUEBA DE H2', document.createElement('h2'))
