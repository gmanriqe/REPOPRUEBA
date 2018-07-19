$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {



            $('.investigadores-carousel').addClass('owl-carousel');


            $('.investigadores-carousel').owlCarousel({
                stagePadding: 50,
                loop: false,
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

            $('.investigadores-carousel').removeClass('owl-carousel');
            var owl = $('.investigadores-carousel');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');

        }
    }
});