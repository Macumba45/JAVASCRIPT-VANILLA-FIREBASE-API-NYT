if (window.caches) {



    caches.open('videoIndex')

    caches.open('videoIndex').then(cache => {

        cache.addAll([

            '../Img/Untitled.mp4',
            './index.html',
            '../Img/79-790806_new-york-times-logo-new-york-times-png.png',
            '../Services/loginForm.js',
            '../Services/registerForm.js',
            '../Services/switchForm.js',
            '../Services/signUpForm.js',
            '../Services/loginUpForm.js',


        ])

    })


}

localVideo = function () {

    const video = 'videoIndex'

    const videoElement = document.querySelector('video')
    const logoIndex = document.querySelector('#textLogin')
    console.log(videoElement)

    const videoInLocalStorage = window.localStorage.setItem(video, '../Img/Untitled.mp4',)
    const logoLocalStorage = window.localStorage.setItem('logoIndex', '../Img/79-790806_new-york-times-logo-new-york-times-png.png')
    console.log(videoInLocalStorage)

}

localVideo()






