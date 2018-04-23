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

	function clearInterval() {
		clearTimeout(interval);
		interval = setInterval(changeSlide, 3000);
	}

	$("#carousel").append($dots);

	$('button').click(function(){
		clearInterval()
		var moves = $(this).text();
		moves = parseInt(moves) - (counter % slidesCount) - 1;
		moves = moves < 0 ? slidesCount + moves : moves;

		for (var i = 0; i < moves; i++) {
			setTimeout(function () {
				changeSlide(500);
			}, i * 500 / moves);
		}

	});
	function changeSlide(msTime){
		msTime = msTime || 500;
		list.animate({"marginLeft":-2400}, msTime, moveFirstSlide);

		function moveFirstSlide(){
			var firstItem = list.find("li:first");
			var lastItem = list.find("li:last");
			lastItem.after(firstItem);
			list.css({marginLeft:-1200});

			counter++;
			activeDot();
		}

	};

	$("#carousel").mouseout(function(){
		$("#carousel i, #carousel button").css("opacity","0");
	});

	$("#carousel").mouseover(function(){
		$("#carousel i, #carousel button").css("opacity","1"); 
	});

	$("#right").click(function(){
		clearInterval()
		changeSlide(500);
	});

	$("#left").click(function(){
		list.animate({"marginLeft":0}, 500, moveLastSlide);
		clearInterval()

		function moveLastSlide(){

			for(var i = 0; i < (slidesCount - 1);i++){
				var firstItem = list.find("li:first");
				var lastItem = list.find("li:last");
				lastItem.after(firstItem);

			}
			counter--;
			activeDot();
			
			list.css({marginLeft:-1200});
		}

	});

});

