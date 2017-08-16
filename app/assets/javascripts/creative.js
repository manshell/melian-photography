(function($) {
    "use strict"; // Start of use strict

    //Navbar background will turn white
$(document).on('turbolinks:load', function() {
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

// Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.sr-contact', {
        duration: 600,
        scale: 0.3,
        dista

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
