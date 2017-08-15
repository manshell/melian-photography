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
//= require rails-ujs
//= require jquery
//= require jquery.easing
//= require turbolinks
//= require bootstrap-sprockets
//= require creative
//= require_tree .

$(document).on('turbolinks:load', function() {
// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 50
    }
});

});

$(document).on('turbolinks:load', function() {
$("#button-transform").click(function() {
  $('.transform').toggleClass('transform-active');
});
});

window.setTimeout(function() {
	$("#flash").fadeTo(2500, 0).slideUp(1750, function() 
	{
		$(this).remove();
	});
}, 3000);


// // Initialize and Configure Magnific Popup Lightbox Plugin
// $(document).on('turbolinks:load', function() {
// 	$('.popup-gallery').magnificPopup({
// 	    delegate: 'a',
// 	    type: 'image',
// 	    tLoading: 'Loading image #%curr%...',
// 	    mainClass: 'mfp-img-mobile',
// 	    gallery: {
// 	        enabled: true,
// 	        navigateByImgClick: true,
// 	        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
// 	    },
// 	    image: {
// 	        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
// 	    }
// 	});
// });

 

//*************************************************************************************************
 