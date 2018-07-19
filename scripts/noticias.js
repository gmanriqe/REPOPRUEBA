$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {
            $('.newsq').addClass('owl-carousel');
            $('.noticias').addClass('d-flex');
            $('.noticias').addClass('flex-column');

            $('.newsq').owlCarousel({
                stagePadding: 30,
                loop: true,
                margin: 10,
                nav: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                }
            });
        } else {
            $('.newsq').removeClass('owl-carousel');
            var owl = $('.newsq');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');

            $('.noticias').removeClass('d-flex');
            $('.noticias').removeClass('flex-column');
        }
    }
});