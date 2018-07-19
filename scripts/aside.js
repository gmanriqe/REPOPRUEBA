$(window).scroll(function () {
    if ($(this).scrollTop() > 800) {
        $("aside.return").addClass('return-to-top')
    }
    else {
        $("aside.return").removeClass('return-to-top')
    }
})

$(".upload-button").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 800);
})