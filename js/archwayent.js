$(function(){
	$('.slider').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    dots: true,
	    infinite: true,
	    speed: 500,
	    fade: true,
	    autoplay: false,
	    cssEase: 'linear',
	    nextArrow: '<img src="img/slider arrow.png" class="right-slider-arrow"/>',
	    prevArrow: '<img src="img/slider arrow.png" class="left-slider-arrow"/>',

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



	function counterUps(){
		$('.countUpMe').each(function() {
		    // no need to specify options unless they differ from the defaults
		    var target = this;
		    var endVal = parseInt($(this).attr('data-endVal'));
		    theAnimation = new countUp(target, 0, endVal, 0, 3.5);
		    // theAnimation = new countUp(target, 0, endVal, 1, 2.5);
		    theAnimation.start();
		});
	}


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
	$('.up-slide').waypoint(function() {
	  	$(this).addClass("animated fadeInUp");
	  	counterUps();
	  	return false;
	}, {
	  	offset: 300
	});

	$('#myModal').bind('show', function () {
        //do stuf on show
    });

	$('#pause-vid').on('click', function() {
    //$('#popup-youtube-player').stopVideo();
	 //alert("etst");
		$('iframe#comp-vid')[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
	});
});
