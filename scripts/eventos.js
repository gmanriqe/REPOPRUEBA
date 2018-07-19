$(document).ready(function () {

    /* SE TENIA QUE MODIFICAR POR LA FORMA DEL FOREACH DE JAIME  */
    var divHtml = $('#eventoDia').parent()[0]; /* LOGICA CAROUSEL MOVIL */ 

    var win = $(window);

    // fire it once on document.ready
    resizeHandler();

    // Fires on every resize
    win.resize(resizeHandler);

    // console.log(divHtml);
    function resizeHandler() {
        if (win.width() <= 769) {

            var html='';
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

    /* INICIO LOGICA CAROUSEL MOVIL */
    console.log('llego');
    console.log(divHtml); /* TENER EN CUENTA */


    function deleteElement(){
        $('.owl-stage .owl-item').each(function(index,element){
            var children = $(this).children().children().attr('id'); /* MODIFIQUE POR JAIME */
                if(children == 'eventoDia'){
                    $(this).trigger('remove.owl.carousel',0);
                } 
            })
    }

    if ($(window).width() <= 769) {
        deleteElement();
    }

    $(window).resize(function () {
        if ($(window).width() <= 769) {
            deleteElement();
        } else {
            $('.eventos-carousel').prepend(divHtml);
        }
    });
    /* FIN LOGICA CAROUSEL MOVIL */
});