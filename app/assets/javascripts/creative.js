(function($) {
    "use strict"; // Start of use strict

    //Navbar background will turn white
$(function() {
// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 50
    }
});

$('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });


//On click image will get bigger.

$("#button-transform").click(function() {
  $('.transform').toggleClass('transform-active');
});
});

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top + 0)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });



    $(function() {
      $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });

})(jQuery); // End of use strict
