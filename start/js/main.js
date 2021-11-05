$(function(){
	$('.popup__link').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});

	$('.galerry__slider').slick({
		prevArrow:'<button type="button" class="slick-btn slick-prew"><img src="images/arrow-left.svg" alt=""></button>',
		nextArrow:'<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.svg" alt=""></button>',
	});

});