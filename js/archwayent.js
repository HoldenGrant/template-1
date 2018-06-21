$(function(){
	$('.slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    infinite: true,
	    speed: 500,
	    fade: true,
	    autoplay: true,
	    cssEase: 'linear',
	    nextArrow: '<i class="fa fa-angle-right right-slider-arrow" aria-hidden="true"></i>',
	    prevArrow: '<i class="fa fa-angle-left left-slider-arrow" aria-hidden="true"></i>',

	});	
	$('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-current.slick-active .content-here h1').removeClass('animated fadeInLeft');
		$('.slick-current.slick-active .content-here span').removeClass('animated fadeInRight');  
		$('.slick-current.slick-active .content-here button').removeClass('animated fadeInUp');        
	});
	$('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-current.slick-active .content-here h1').addClass('animated fadeInLeft');
		$('.slick-current.slick-active .content-here span').addClass('animated fadeInRight');
		$('.slick-current.slick-active .content-here button').addClass('animated fadeInUp');
	});

	$(window).scroll(function() {    
	    var scroll = $(window).scrollTop();

	    if (scroll >= 200) {
	        $('nav').addClass("dark-header");
	    } else {
	        $('nav').removeClass("dark-header");
	    }
	});

	$('.left-slide').waypoint(function() {
	  	$(this).addClass("animated fadeInLeft");
	}, {
	  	offset: 300
	});
	$('.right-slide').waypoint(function() {
	  	$(this).addClass("animated fadeInRight");
	}, {
	  	offset: 300
	});
})


	

	