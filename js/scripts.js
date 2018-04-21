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

	$('button').click(function(){
		clearTimeout(interval);
		var moves = $(this).text();
		moves = parseInt(moves) + (slidesCount - (counter % slidesCount) - 1);
		for (var i = 0; i < moves; i++) {
			setTimeout(function () {
				changeSlide(0.00001);
			}, i * 1 / moves);
		}

		interval = setInterval(changeSlide, 3000);

	});

	function changeSlide(msTime){
		msTime = msTime || 500;
		clearTimeout(interval);
		list.animate({"marginLeft":-2400}, msTime, moveFirstSlide);

		function moveFirstSlide(){
			var firstItem = list.find("li:first");
			var lastItem = list.find("li:last");
			lastItem.after(firstItem);
			list.css({marginLeft:-1200});

			counter++;
			activeDot();
		}

		interval = setInterval(changeSlide, 3000);
	};

	$("#carousel").mouseout(function(){
		$("#carousel i").css("opacity","1");
	});

	$("#carousel").mouseover(function(){
		$("#carousel i").css("opacity","1"); 
	});

	$("#right").click(function(){
		changeSlide(500);
	});

	$("#left").click(function(){
		list.animate({"marginLeft":0}, 500, moveLastSlide);
		clearTimeout(interval);

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

		interval = setInterval(changeSlide, 3000);
	});

	
});

