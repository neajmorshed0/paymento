(function ($) {
"use strict";

	//Sticky Menu
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 250) {
			$(".sticky").removeClass("sticky-header");
		} else {
			$(".sticky").addClass("sticky-header");
		}
	});

	// Mobile Menu
	$('#mobile-menu').meanmenu({
		meanScreenWidth: '991',
		meanMenuContainer: '.responsive-menu'
	});

	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

	//Design Slider
	$('.design-active').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		prevArrow: '<button type="button" class="slick-prev"><i class="far fa-arrow-left"></i></button>',
		nextArrow: '<button type="button" class="slick-next"><i class="far fa-arrow-right"></i></button>',
		responsive: [{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	///
		$('.feedback-active').slick({
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 2,
			arrows: false,
			responsive: [{
					breakpoint: 991,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
				// You can unslick at a given breakpoint now by adding:
				// settings: "unslick"
				// instead of a settings object
			]
		});




	//slider
	$('.slider-active').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false
	});

		

	//testimonial slider
	$('.testimonial-active').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false
	});

	


	//Counter
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// WOW
	new WOW().init();

	// Isotope
	$('#nav-content').isotope({
		// options
	});

	// filter items on button click
	$('#nav-filter').on('click', 'button', function () {

		var filterValue = $(this).attr('data-filter');

		$('#nav-content').isotope({

			filter: filterValue
		});

		$('#nav-filter').find('.active').removeClass('active');
		$(this).addClass('active');
	});

})(jQuery);