;(function($){

	$(document).ready(function(){
		//Slider init
		var $slider = $('.ba-team-slider'),
			$prev = $('.slick-prev', $slider),
			$next = $('.slick-next', $slider);

		$slider.slick({
			dots: true,
			prevArrow: $prev,
			nextArrow: $next,
			slide: '.ba-team-slider__slide'
		});
	});

})(jQuery);
