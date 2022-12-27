const userInfoProfile = 'userInfo'

let userInfo = JSON.parse(window.localStorage.getItem(userInfoProfile));
const allUserContainer = document.getElementById('profile')

if (userInfo) {

    const userContainer = document.getElementById('profileView')

    const userElementImg = document.createElement('img')
    userElementImg.setAttribute("id", "imgUser")
    userElementImg.setAttribute("src", "../img/icons8-female-profile-100.png")

    const userTitleProfile = document.createElement('p')
    userTitleProfile.setAttribute("id", "emailTitle")
    const emailTitle = "Email"
    userTitleProfile.innerText = (emailTitle)

    const userElementEmail = document.createElement('p')
    userElementEmail.setAttribute("id", "emailUser")
    const emailUser = userInfo.email
    userElementEmail.innerText = (emailUser)

    userContainer.appendChild(userElementImg)

    const hrDivisorProfile = document.createElement('hr')
    hrDivisorProfile.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile)


    userContainer.appendChild(userTitleProfile)


    const hrDivisorProfile1 = document.createElement('hr')
    hrDivisorProfile1.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile1)

    userContainer.appendChild(userElementEmail)


}



