if (window.caches) {

    caches.open('videoIndex')

    caches.open('videoIndex').then(cache => {

        cache.addAll([

            '../Img/Untitled.mp4',
            '../Img/Mivideo.webm',
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




