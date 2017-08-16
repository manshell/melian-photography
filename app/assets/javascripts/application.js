// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery.easing
//= require creative
//= require bootstrap-sprockets
//= require creative.js


// $(document).on('turbolinks:load', function() {
// // Offset for Main Navigation
// $('#mainNav').affix({
//     offset: {
//         top: 50
//     }
// });

// });

// $(document).on('turbolinks:load', function() {
// $("#button-transform").click(function() {
//   $('.transform').toggleClass('transform-active');
// });
// });

// window.setTimeout(function() {
// 	$("#flash").fadeTo(2500, 0).slideUp(1750, function() 
// 	{
// 		$(this).remove();
// 	});
// }, 3000);

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


//On click image will get bigger.

$("#button-transform").click(function() {
  $('.transform').toggleClass('transform-active');
});
});