$(document).ready(function () {

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    function resizeHandler() {
        if (win.width() <= 769) {


            $('.agenda-carousel').addClass('owl-carousel');
            $('.agenda-carousel div').removeClass('col-sm-6');
            $('.agenda-carousel div').removeClass('col-lg-3');

            $('.agenda-carousel').owlCarousel({
                stagePadding: 5,
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

            $('.expositores-carousel').addClass('owl-carousel');
            $('.expositores-carousel div').removeClass('col-md-6');
            $('.expositores-carousel div').removeClass('col-lg-6');

            $('.expositores-carousel').owlCarousel({
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

            $('.expositores-carousel>div').addClass('col-md-6');
            $('.expositores-carousel>div').addClass('col-lg-3');

            $('.expositores-carousel').removeClass('owl-carousel');
            var owl6 = $('.expositores-carousel');
            owl6.owlCarousel();
            owl6.trigger('destroy.owl.carousel');


            $('.agenda-carousel>div').addClass('col-sm-6');
            $('.agenda-carousel>div').addClass('col-lg-3');

            $('.agenda-carousel').removeClass('owl-carousel');
            var owl2 = $('.agenda-carousel');
            owl2.owlCarousel();
            owl2.trigger('destroy.owl.carousel');

        }
    }
});