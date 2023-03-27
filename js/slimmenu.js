//  Sticky Menu

$(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
        $('.sticky_header').addClass('menu_fixed');
    } else {
        $('.sticky_header').removeClass('menu_fixed');
    }
});
