$(window).scroll(function () {
    $(window).on("resize", function (e) {
        checkScreenSize();
    });

    checkScreenSize();

    function checkScreenSize() {
        var newWindowWidth = $(window).width();
        if (newWindowWidth < 992) {
            $('.menu-scroll').show();
        }
        else {
        if ($(this).scrollTop() >= 173 || $(window).width() < 992) { // this refers to window
                $('.menu-scroll').css({ 'display': 'block', 'opacity': '1'})
            } else {
                $('.menu-scroll').css({ 'opacity': '0' });
            }
        }
    }
});

$('.temas-click').click(function (e) {
    e.preventDefault();
    $('.menu-principal-scroll').removeClass('show');
    $('.temas-menu-scroll').toggleClass('show');
});

$('.principal-click').click(function (e) {
    e.preventDefault();
    $('.temas-menu-scroll').removeClass('show');
    $('.menu-left').toggleClass('show');
});

$('.close-link').click(function (e) {
    e.preventDefault();
    $('.menu-left').removeClass('show');
});

$('#accordionExample').on('shown.bs.collapse', function () {

    $('.btn-plus[aria-expanded="true"]').html('-');

})
$('#accordionExample').on('hidden.bs.collapse', function () {
    $('.btn-plus').html('+');
})