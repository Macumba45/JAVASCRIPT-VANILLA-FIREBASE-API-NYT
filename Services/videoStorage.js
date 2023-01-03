if (window.caches) {
    caches.open('videoIndex')

    caches.open('videoIndex').then(cache => {

        cache.addAll([


            '../Img/Untitled.mp4',
            './index.html',
            '../Img/79-790806_new-york-times-logo-new-york-times-png.png',
            '../Services/main.js'

        ])

    })


}




