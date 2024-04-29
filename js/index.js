"use strict";

let maintop = $("main").offset().top;
$("#arrowUp").click(function () {
	$("html,body").animate({ scrollTop: 0 }, 500);
});

$(document).ready(function () {
	$("#loed").fadeToggle(1000, function () {
		$("body").css("overflow", "auto");
		$("#loed").remove()
	});

	$(window).scroll(() => {
		let scrolltop = $(window).scrollTop();
		if (scrolltop < maintop + 200) {
			$("nav").css('backgroundColor', '#3b5d50');
			$("#arrowUp").hide(500);

			// $().
		}
		else {
			$("nav").css('backgroundColor', 'transparent');
			$("#arrowUp").show(500);
		}
	});
});
