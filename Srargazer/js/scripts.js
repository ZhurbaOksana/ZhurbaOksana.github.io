$(document).ready(function() {
	$('.slider').slick({
	  dots: true,
	  arrows: false,
	  infinite: true,
	  adaptiveHeight: false,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	  // responsive: [
	  //   {
	  //     breakpoint: 1024,
	  //     settings: {
	  //       slidesToShow: 3,
	  //     }
	  //   },
	  //   {
	  //     breakpoint: 700,
	  //     settings: {
	  //       slidesToShow: 2
	  //     }
	  //   }
	  // ]
	});
	$('.slider1').slick({
	  dots: false,
	  arrows: true,
	  infinite: true,
	  adaptiveHeight: true,
	  speed: 500,
	  fade: true,
	  cssEase: 'linear'
	 });
	$('.parallax-window').parallax({imageSrc: '../img/para.png'});
	// $('.slider').on('afterChange', function(event, slick){
 //  var currentSlide = $('.slider').slick('slickCurrentSlide');
 //  if ( (currentSlide+1)%2 == 0) {
 //   $(".slick-dots").addClass("rtl");
 //  } else {
 //   $(".slick-dots").removeClass("rtl");
 //  }
 // });
	
});