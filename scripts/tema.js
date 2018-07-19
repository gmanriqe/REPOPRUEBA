$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {



            $('.investigaciones-carousel').addClass('owl-carousel');
            $('.investigaciones-carousel div').removeClass('col-sm-6');
            $('.investigaciones-carousel div').removeClass('col-lg-3');

            $('.investigaciones-carousel').owlCarousel({
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

            $('.libros-carousel').addClass('owl-carousel');
            $('.libros-carousel').owlCarousel({
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


            $('.investigadores-carousel').addClass('owl-carousel');

            $('.investigadores-carousel').owlCarousel({
                stagePadding: 40,
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


            $('.loque-carousel').addClass('owl-carousel');


            $('.loque-carousel').owlCarousel({
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

            $('.investigaciones-carousel>div').addClass('col-sm-6');
            $('.investigaciones-carousel>div').addClass('col-lg-3');

            $('.investigaciones-carousel').removeClass('owl-carousel');
            var owl = $('.investigaciones-carousel');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');


            $('.agenda-carousel>div').addClass('col-sm-6');
            $('.agenda-carousel>div').addClass('col-lg-3');

            $('.agenda-carousel').removeClass('owl-carousel');
            var owl2 = $('.agenda-carousel');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');


            $('.libros-carousel>div').addClass('col-lg-4');

            $('.libros-carousel').removeClass('owl-carousel');
            var owl3 = $('.libros-carousel');
            owl3.owlCarousel();
            owl3.trigger('destroy.owl.carousel');


            $('.investigadores-carousel>div').addClass('col-sm-6');
            $('.investigadores-carousel>div').addClass('col-lg-3');

            $('.investigadores-carousel').removeClass('owl-carousel');
            var owl4 = $('.investigadores-carousel');
            owl4.owlCarousel();
            owl4.trigger('destroy.owl.carousel');


            $('.loque-carousel>div').addClass('col-md-6');
            $('.loque-carousel>div').addClass('col-lg-3');


            $('.loque-carousel').removeClass('owl-carousel');
            var owl5 = $('.loque-carousel');
            owl5.owlCarousel();
            owl5.trigger('destroy.owl.carousel');



            $('.medios-carousel>div').addClass('col-md-6');
            $('.medios-carousel>div').addClass('col-lg-3');


            $('.medios-carousel').removeClass('owl-carousel');
            var owl5 = $('.medios-carousel');
            owl5.owlCarousel();
            owl5.trigger('destroy.owl.carousel');

        }
    }
});