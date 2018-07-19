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

            $('.investigaciones-carousel').addClass('owl-carousel');
            //$('.investigaciones-carousel div').removeClass('col-md-6');
            //$('.investigaciones-carousel div').removeClass('col-lg-3');

            $('.investigaciones-carousel').owlCarousel({
                stagePadding: 10,
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
                stagePadding: 10,
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
                stagePadding: 10,
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
                stagePadding: 10,
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


            $('.videos-carousel').addClass('owl-carousel');
            $('.videos-carousel').owlCarousel({
                stagePadding: 10,
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

            $('.videos-carousel').removeClass('owl-carousel');
            var owl6 = $('.videos-carousel');
            owl6.owlCarousel();
            owl6.trigger('destroy.owl.carousel');

            $('.medios-carousel').removeClass('owl-carousel');
            var owl5 = $('.medios-carousel');
            owl5.owlCarousel();
            owl5.trigger('destroy.owl.carousel');

            $('.loque-carousel').removeClass('owl-carousel');
            var owl4 = $('.loque-carousel');
            owl4.owlCarousel();
            owl4.trigger('destroy.owl.carousel');

            $('.libros-carousel').removeClass('owl-carousel');
            var owl3 = $('.libros-carousel');
            owl3.owlCarousel();
            owl3.trigger('destroy.owl.carousel');


            $('.investigaciones-carousel>div').addClass('col-md-6');
            $('.investigaciones-carousel>div').addClass('col-lg-3');
            $('.investigaciones-carousel').removeClass('owl-carousel');
            var owl2 = $('.investigaciones-carousel');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');

            $('.newsq').removeClass('owl-carousel');
            var owl = $('.newsq');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');

            $('.noticias').removeClass('d-flex');
            $('.noticias').removeClass('flex-column');
        }
    }
});