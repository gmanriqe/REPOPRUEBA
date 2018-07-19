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


            $('.publicaciones-carousel').addClass('owl-carousel');


            $('.publicaciones-carousel').owlCarousel({
                stagePadding: 20,
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

            $('.medios-carousel').addClass('owl-carousel');


            $('.medios-carousel').owlCarousel({
                stagePadding: 20,
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
            var owl3 = $('.investigadores-carousel');
            owl3.owlCarousel();
            owl3.trigger('destroy.owl.carousel');

            $('.medios-carousel').removeClass('owl-carousel');
            var owl2 = $('.medios-carousel');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');

            $('.publicaciones-carousel').removeClass('owl-carousel');
            var owl = $('.publicaciones-carousel');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');



        }
    }
});