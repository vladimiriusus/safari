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
	$('.galerry__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
	
	$('.menu__btn').on('click', function(){
		$('.menu__list').toggleClass('menu__list--active')
	})

});