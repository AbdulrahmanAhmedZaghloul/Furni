"use strict";

import * as fromss from "./plusMoubel.js";
addEventListener("click" ,()=>{
    fromss.minus()
});

addEventListener("click" ,()=>{
    fromss.plus()
})

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
		if (scrolltop < maintop +200) {
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

// document.getElementById('clickMinus').addEventListener('click', ()=>{
// 	for (let i = 0; i < 1; i++) {
// 		currentValue--;
// 	}
// 	document.getElementById('result').innerText = currentValue;
// 	if (currentValue < 0) {
// 		document.getElementById('result').innerText = "1";
// 	}
// });

// document.getElementById('clickplus').addEventListener('click', ()=>{
// 	for (let i = 0; i < 1; i++) {
// 		currentValue++;
// 		document.getElementById('result').innerText = currentValue;
// 	}
// });