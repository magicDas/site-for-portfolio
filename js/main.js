$(document).ready(function() {
	var menuBtn = $('.top-nav_btn');
	var menu = $('.top-nav_menu');

	menuBtn.on('click', function(event) {
		event.preventDefault();
		menu.toggleClass('top-nav_menu__active');
	});
	
	/*кнопка вверх*/
	
		var $backToTop = $('#btn-up');

		$(window).scroll(function() {
		    if ( $(this).scrollTop() > 300 ) {
		        $backToTop.fadeIn();
		    } else {
		        $backToTop.fadeOut();
		    }
		});

		// scroll body to 0px on click
		$backToTop.click(function () {
		    $('body,html').animate({
		        scrollTop: 0
		    }, 1500);
		    return false;
		});
		
});