if (window.caches) {
    caches.open('videoIndex')

    caches.open('videoIndex').then(cache => {

        cache.addAll([


            '../Img/Untitled.mp4',
            './index.html',
            '../Styles'


        ])

    })


}




