// div Slide down 
$(document).ready(function(){
    $(".pr").click(function(){
      $(".slide1").slideToggle("fast");
    });
});

$(document).ready(function(){
    $(".mr").click(function(){
      $(".slide2").slideToggle("fast");
    });
});

$(document).ready(function(){
    $(".msr").click(function(){
      $(".slide3").slideToggle("fast");
    });
});

$(document).ready(function(){
    $(".mtr").click(function(){
      $(".slide4").slideToggle("fast");
    });
});

// Rotate aarrow

$('.pr').on("click", function (event) {
    $('.arrow-img').toggleClass('rotate');
    $('.arrow-img').toggleClass('rotate-reset');
});

$('.mr').on("click", function (event) {
    $('.arrow-img2').toggleClass('rotate2');
    $('.arrow-img2').toggleClass('rotate-reset2');
});

$('.msr').on("click", function (event) {
    $('.arrow-img3').toggleClass('rotate3');
    $('.arrow-img3').toggleClass('rotate-reset3');
});

$('.mtr').on("click", function (event) {
    $('.arrow-img4').toggleClass('rotate4');
    $('.arrow-img4').toggleClass('rotate-reset4');
});