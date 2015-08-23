
// JavaScript Document

jQuery(document).ready(function(){

	//Automatic slider
	var width = 200;
	var speed = 2000;
	var pause = 4000;
	
	var slider = jQuery('.slides');
	var slides = jQuery('.slides li');
	var currentSlide = 1;
	
	var interval;
	playSlider();
	
	function playSlider(){
		interval = setInterval(function(){
			slider.animate({marginLeft:'-=' + width}, speed, function() {
				currentSlide++;
				if (currentSlide == slides.length){
					currentSlide = 1;
					slider.css('margin-left', 0);
				}
			}); 
		}, pause);
	}
	
	function stopSlider(){
		clearInterval(interval);
	}
	
});


