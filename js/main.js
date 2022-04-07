$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#button-up, .credit-block').fadeIn();
        } else {
            $('#button-up, .credit-block').fadeOut();
        }
    });
    $('#button-up, .credit-block').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});
