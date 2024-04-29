"use strict";

const clickMinus = document.getElementById('clickMinus');
const clickPlus = document.getElementById('clickplus');
let truenumber = document.getElementById("truenumber");
const result = document.getElementById('result');
const totalNumber = document.getElementById('totalnumber');
const subtotal = document.getElementById('subtotal');
const closed = document.getElementById('close');
const tbodyx = document.getElementById('tbodyx');
let price = 49.00;
let quantity = 1;

function updateTotal() {
    totalNumber.textContent = (price * quantity).toFixed(2);
    subtotal.textContent = (price * quantity).toFixed(2);
}

clickPlus.addEventListener('click', () => {
    quantity++;
    result.textContent = quantity;
    truenumber.textContent = quantity;
    updateTotal();
});

clickMinus.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        result.textContent = quantity;
        truenumber.textContent = quantity;
        updateTotal();
    }
});
 closed.addEventListener("click",()=>{
    $("#tbodyx").css("display", "none");
    subtotal.textContent = "0"

});

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
