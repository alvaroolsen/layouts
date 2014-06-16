$(document).ready(function(){

	$.fn.preload = function() {
	    this.each(function(){
	        $('<img/>')[0].src = this;
	    });
	}

// Usage:

	//$(['img1.jpg','img2.jpg','img3.jpg']).preload();



	var isOpen = false;

	$(".info").click(function(){
		if(!isOpen){
			$(".bookmark").fadeOut().fadeIn();
			$(this).animate({width:"25%"}, function(){
				//$(".bookmark").animate({right:"-23%"})
				isOpen = true;
			});
		}else{
			$(".bookmark").fadeOut().fadeIn();
			$(this).animate({width:"0%"}, function(){
				isOpen = false;
			});

		}
	})

	
});