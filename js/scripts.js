$(function(){
	var list = $("#carousel ul");
	setInterval(changeSlide, 3000);
	function changeSlide(){
		list.animate({"marginLeft":-400}, 500, moveFirstSlide);
		function moveFirstSlide(){
			var firstItem = list.find("li:first");
			var lastItem = list.find("li:last");
			lastItem.after(firstItem);
			list.css({marginLeft:0});
		}

	}
});