$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {


            $('.proyectos-carousel').addClass('owl-carousel');
            //$('.proyectos-carousel div').removeClass('col-md-6');
            //$('.proyectos-carousel div').removeClass('col-lg-4');

            $('.proyectos-carousel').owlCarousel({
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
            $('.libros-carousel div').removeClass('col-lg-4');

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

        } else {
            //$('.proyectos-carousel>div').addClass('col-md-6');
            //$('.proyectos-carousel>div').addClass('col-lg-4');
            $('.proyectos-carousel').removeClass('owl-carousel');
            var owl4 = $('.proyectos-carousel');
            owl4.owlCarousel();
            owl4.trigger('destroy.owl.carousel');



            $('.medios-carousel').removeClass('owl-carousel');
            var owl = $('.medios-carousel');
            owl.owlCarousel();
            owl.trigger('destroy.owl.carousel');


            //$('.investigaciones-carousel>div').addClass('col-md-6');
            //$('.investigaciones-carousel>div').addClass('col-lg-3');

            $('.investigaciones-carousel').removeClass('owl-carousel');
            var owl2 = $('.investigaciones-carousel');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');


            $('.libros-carousel>div').addClass('col-lg-4');

            $('.libros-carousel').removeClass('owl-carousel');
            var owl3 = $('.libros-carousel');
            owl3.owlCarousel();
            owl3.trigger('destroy.owl.carousel');


        }
    }
});