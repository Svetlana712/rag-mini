$(document).ready(function() {
    var isScrollHandled = false;
    var menuItems = $('#menu-links');
    var menuItemsDesktop = $('#menu-large-links');

    var scroll_start = 0;
    var startchange = $('#change_navbar');
    var offset = startchange.offset();
    $('.show-on-scroll').css({
        'display': 'none'
    });
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start > offset.top) {
                $(".show-on-scroll").css({
                    'display': 'initial'
                });

                if (!isScrollHandled) {
                    var els = document.getElementsByClassName("dynamic-on-scroll");

                    isScrollHandled = true;
                    while (els.length > 0) {
                        els[0].classList.add("dynamic-on-scroll-on");
                        els[0].classList.remove("dynamic-on-scroll");
                    }
                    isScrollHandled = false;
                }
            } else {
                $('.show-on-scroll').css({
                    'display': 'none'
                });

                if (!isScrollHandled) {
                    var els = document.getElementsByClassName("dynamic-on-scroll-on");

                    isScrollHandled = true;
                    while (els.length > 0) {
                        els[0].classList.add("dynamic-on-scroll");
                        els[0].classList.remove("dynamic-on-scroll-on");
                    }
                    isScrollHandled = false;
                }
            }
        });
    }


});