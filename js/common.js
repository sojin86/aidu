$(document).ready(function () {
    // header 위 nav
    var header = $('header');
    var MainBtn = $('.hd_nav_bt');
    var toggleBtn = $('.header_nav_wrap > ul > li > ul');

    // header 마우스 오버시
    MainBtn.on('mouseenter', function () {
        if (header.hasClass('close')) {
            header.addClass('hover');
            header.removeClass('close');
        }
        if (toggleBtn.hasClass('togglebtn')) {
            toggleBtn.addClass('open');
        }
    });
    // header 마우스 오버 아닐시
    header.on('mouseleave', function () {
        if (header.hasClass('hover')) {
            header.removeClass('hover');
            header.addClass('close');
        }
        if (toggleBtn.hasClass('open')) {
            toggleBtn.removeClass('open');
            toggleBtn.addClass('togglebtn');
        }
    });

    // up bt (top으로 올라가는 버튼)
    var TopBt = $('.up_bt_div');
    var delay = 500;
    TopBt.on('click', function () {
        $('html, body').stop().animate({ scrollTop: 0 }, delay);
    });
});
