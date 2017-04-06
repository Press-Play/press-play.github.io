// Adds the class to c if it does not exist
// Removes the class from c if it does
(function($){
	$.fn.toggleClass = function(c) {
		if (this.hasClass(c)) {
			this.removeClass(c);
		} else {
			this.addClass(c);
		}
		return this;
	};
})(jQuery);

// This function takes in a class name
// and "rolls" them out
// function rollOut(c) {
// 	var time = 0;
// 	$(c).each( function(index) {
// 		self = $(this);
// 		//setTimeout( function() {
// 			setTimeout( function(){ self.toggleClass('hide'+index); }, time);
// 			time = time + 200;
// 		//}, 200);
// 	});
// }

// Button scrolling
function scrollToElement(id, speed) {
	// Set the default speed to 500ms
	speed = typeof speed !== 'undefined' ? speed : 500;

	$('html, body').animate({
		scrollTop: $(id).offset().top
	}, speed);
}

function navigation_check() {
	var offset = $(this).scrollTop();
	if (offset <= 0) {
		$('.navigation-container').removeClass('hide');
		$('.navigation-container').removeClass('bottom');
	} else if (offset <= $('#1').offset().top - 1) {
		$('.navigation-container').addClass('hide');
		$('.navigation-container').addClass('bottom');
	} else {
		$('.navigation-container').removeClass('hide');
	}
}

$(window).scroll(
	function() {
		navigation_check();
	}
);

$('.nav-landing').click(
	function() {
		$.when(scrollToElement("#0")).then(navigation_check());
	}
);
$('.nav-about').click(
	function() {
		$.when(scrollToElement("#1")).then(navigation_check());
	}
);
$('.nav-phoenix').click(
	function() {
		$.when(scrollToElement("#2")).then(navigation_check());
	}
);
$('.nav-featherstorm').click(
	function() {
		$.when(scrollToElement("#3")).then(navigation_check());
	}
);
$('.nav-villavu').click(
	function() {
		$.when(scrollToElement("#4")).then(navigation_check());
	}
);

function toggle_tile(tile_id, tiles) {
	$('#skills').toggleClass('hide');
	$('#jobs').toggleClass('hide');
	$('#passions').toggleClass('hide');
	// $('#edu').removeClass('hide');
	$('#education').toggleClass('expanded');
}

function hide_element(element_id) {
	$(`#${element_id}`).toggleClass('hide');
}
