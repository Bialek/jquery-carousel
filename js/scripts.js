$(function(){

	var list = $("#carousel ul");
	var interval = setInterval(changeSlide, 3000);

	function changeSlide(){
		clearTimeout(interval);
		list.animate({"marginLeft":-2400}, 500, moveFirstSlide);

		function moveFirstSlide(){
			var firstItem = list.find("li:first");
			var lastItem = list.find("li:last");
			lastItem.after(firstItem);
			list.css({marginLeft:-1200});
		}

		interval = setInterval(changeSlide, 3000);
	}

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
	for(var i = 0;i <= circle.length; i++){
		circle.css("left", 40 + (i*2));
	}
});

