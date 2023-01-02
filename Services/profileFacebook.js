const userInfoProfileFacebook = 'userInfoFacebook'

let userInfoFacebook = JSON.parse(window.localStorage.getItem(userInfoProfileFacebook))

if (userInfoFacebook) {

    const userContainer = document.getElementById('profileView')
    const providerData = userInfoFacebook.providerData
    const emailproviderData = providerData[0].email

    const userElementImg = document.createElement('img')
    const userPicProfile = userInfoFacebook.photoURL
    userElementImg.setAttribute("id", "imgUserFacebook")
    userElementImg.setAttribute("referrerpolicy", "no-referrer")
    userElementImg.setAttribute("src", userPicProfile)
    userContainer.appendChild(userElementImg)

    const userElementDisplayName = document.createElement('p')
    userElementDisplayName.setAttribute("id", "displayName")
    const nameUser = userInfoFacebook.displayName
    userElementDisplayName.innerText = (nameUser)
    userContainer.appendChild(userElementDisplayName)

    const userElementEmail = document.createElement('p')
    userElementEmail.setAttribute("id", "emailUser")
    const emailUser = emailproviderData
    userElementEmail.innerText = (emailUser)

    // const userEmailVerified = document.createElement('p')
    // userEmailVerified.setAttribute("id", "emailVerifed")
    // const emailVerifed = userInfoFacebook.emailVerified
    // userEmailVerified.innerText = (emailVerifed)

    const hrDivisorProfile1 = document.createElement('hr')
    hrDivisorProfile1.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile1)

    userContainer.appendChild(userElementEmail)

    const hrDivisorProfile = document.createElement('hr')
    hrDivisorProfile.setAttribute("id", "hrProfile")
    userContainer.appendChild(hrDivisorProfile)

    // userContainer.appendChild(userEmailVerified)


}
