const favBookList = JSON.parse(window.localStorage.getItem('favBooksList'))

const booksFavContainer = document.createElement('div')
booksFavContainer.setAttribute("id", "booksFavContainer")


for (const favBooks of favBookList) {

    console.log(favBooks)

    const body = document.querySelector('body')

    const individualFavBook = document.createElement('div')

    individualFavBook.setAttribute("id", "allBooks")
    booksFavContainer.appendChild(individualFavBook)
    body.appendChild(booksFavContainer)

    const titleBooks = favBooks.title
    const allTitleBook = document.createElement('h3')
    allTitleBook.setAttribute("id", "titleBook")
    allTitleBook.innerText = titleBooks

    const imgBook = favBooks.book_image
    const showImg = document.createElement('img')
    showImg.setAttribute("src", imgBook)
    showImg.setAttribute("id", "imgBooks")

    const weekList = favBooks.weeks_on_list
    const elementWeekList = document.createElement('p')
    elementWeekList.setAttribute("id", "weekList")
    elementWeekList.innerText = "Week on list: " + weekList

    const descriptionBook = favBooks.description
    const elementDescription = document.createElement('p')
    elementDescription.setAttribute("id", "descriptionBook")
    elementDescription.innerText = "Description: " + descriptionBook


    const buttonAmazonText = "Buy at"
    const buyAmazon = favBooks.amazon_product_url
    const buttonAmazonContainer = document.createElement('div')
    buttonAmazonContainer.setAttribute("id", "divButton")
    const buttonAmazon = document.createElement('a')
    buttonAmazon.setAttribute("id", "buttonAmazon")
    buttonAmazon.setAttribute("href", buyAmazon)
    const buttonImgElement = document.createElement('img')
    buttonImgElement.setAttribute("id", "amazonPic")
    buttonImgElement.setAttribute('src', '../Img/icons8-amazon-120.png')
    buttonAmazon.innerText = buttonAmazonText
    buttonAmazon.appendChild(buttonImgElement)

    // const imgFavBookIcon = document.createElement('img')
    // imgFavBookIcon.setAttribute("id", "favBookIcon")
    // imgFavBookIcon.setAttribute("class", "classFavBookIcon")
    // imgFavBookIcon.setAttribute('src', '../Img/icons8-favorite-100.png')
    // buttonAmazonContainer.appendChild(imgFavBookIcon)

    // const imgFavBookIconFilled = document.createElement('img')
    // imgFavBookIconFilled.setAttribute("id", "favBookIconFilled")
    // imgFavBookIconFilled.setAttribute("class", "classFavBookIconFilled")
    // imgFavBookIconFilled.setAttribute('src', '../Img/icons8-favorite-100-filled.png')
    // buttonAmazonContainer.appendChild(imgFavBookIconFilled)


    individualFavBook.appendChild(allTitleBook)
    individualFavBook.appendChild(showImg)
    individualFavBook.appendChild(elementWeekList)
    individualFavBook.appendChild(elementDescription)
    // buttonAmazonContainer.appendChild(buttonAmazon)
    individualFavBook.appendChild(buttonAmazonContainer)

}