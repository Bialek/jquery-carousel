$(function(){

	var list = $("#carousel ul");
	var interval = setInterval(changeSlide, 3000);

	var slidesCount = list.find('li').toArray().length;
	var $dots = $('<div class="dots"></div>');

	var $dotsArray = [], counter = 10000 * slidesCount;

	for (var i = 1; i <= slidesCount; i++) {
		var $button = $('<button>'+i+'</button>');

		$dotsArray.push($button);

		$dots.append($button);
	}

	function activeDot() {
		$('button.active').removeClass('active');
		$dotsArray[counter % slidesCount].addClass('active');
	}

	activeDot();

	$("#carousel").append($dots);


	function changeSlide(msTime){
		msTime = msTime || 500;
		clearTimeout(interval);
		list.animate({"marginLeft":-2400}, 500, moveFirstSlide);

		function moveFirstSlide(){
			var firstItem = list.find("li:first");
			var lastItem = list.find("li:last");
			lastItem.after(firstItem);
			list.css({marginLeft:-1200});

			counter++;
			activeDot();
		}

		interval = setInterval(changeSlide, 3000);
	}

	// function moveXTimes(moves) {
	// 	for (var i = 0; i < moves; i++) {
	// 		setTimeout(function () {
	// 			changeSlide(500 / moves);
	// 		}, i * 500 / moves);
	// 	}
	// }

	$("#carousel").mouseout(function(){
		$("#carousel i").css("opacity","1");
	});

	$("#carousel").mouseover(function(){
		$("#carousel i").css("opacity","1"); 
	});

	$("#right").click(changeSlide);

	$("#left").click(function(){
		list.animate({"marginLeft":0}, 500, moveLastSlide);
		clearTimeout(interval);

		function moveLastSlide(){

			for(var i = 0; i <= 3;i++){
				var firstItem = list.find("li:first");
				var lastItem = list.find("li:last");
				lastItem.after(firstItem);

			}
			
			list.css({marginLeft:-1200});
		}

		interval = setInterval(changeSlide, 3000);
	});
	var circle = $('[class*="circle"]');
	console.log(circle);
});

