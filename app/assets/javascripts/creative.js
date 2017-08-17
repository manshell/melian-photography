(function($) {
    "use strict"; // Start of use strict

//Navbar background will turn white
$(document).on('turbolinks:load', function() {
// Offset for Main Navigation
// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })
});

//On click image will get bigger.
$(document).on('turbolinks:load', function() {
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
