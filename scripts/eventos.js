$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {


            $('.eventos-carousel').addClass('owl-carousel');


            $('.eventos-carousel').owlCarousel({
                stagePadding: 0,
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

            $('.eventos-carousel-2').addClass('owl-carousel');


            $('.eventos-carousel-2').owlCarousel({
                stagePadding: 0,
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

            $('.eventos-carousel-2').removeClass('owl-carousel');
            var owl2 = $('.eventos-carousel-2');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');

            $('.eventos-carousel').removeClass('owl-carousel');
            var owl = $('.eventos-carousel');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');



        }
    }
});