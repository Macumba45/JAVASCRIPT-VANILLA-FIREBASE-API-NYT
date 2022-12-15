const allBooks = document.getElementById('allListBooks') // Selecciono el elemento del HTML 
const prueba = allBooks.appendChild(document.createElement('div')) // Le añado al "id" padre un elemento hijo DIV
prueba.setAttribute("id", "listBooks") // Con este metodo le añado un atributo al DIV con ID


async function postAllListBooks() {

    const postAllListBooks = document.getElementById('listBooks')
    const arrListNames = await fetchListBooks()

    for (let i = 0; i < arrListNames.length; i++) {

        const currentName = arrListNames[i]

        console.log(currentName)


        const actualListElementContainer = document.createElement('div')
        actualListElementContainer.setAttribute("id", "listBooksHijo")
        const actualListElementTitle = document.createElement('p')
        actualListElementTitle.setAttribute("id", "tituloLibro")
        actualListElementContainer.appendChild(actualListElementTitle)
        actualListElementTitle.innerText = currentName
        postAllListBooks.appendChild(actualListElementContainer)

    }

}


postAllListBooks()




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
