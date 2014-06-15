$(document).ready(function(){

	$('nav ul li a').bind('click',function(event){
	    var $anchor = $(this)

		$('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top
	    }, 1000);
	    
	    event.preventDefault();

	});


	var newSlidesWidth = $(".slide").width();
	var totalSlides = $(".slider .slides").children();

	console.log(totalSlides.length)

	for(var i = 0; i < totalSlides.length; i++){

		console.log($(totalSlides[i]).width())
		console.log(i)
		newSlidesWidth = newSlidesWidth + $(totalSlides[i]).width();
	}

	console.log(newSlidesWidth);

	$(".slides").css({width:(newSlidesWidth)+"px"})

	
});