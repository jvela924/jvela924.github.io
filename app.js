$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

$("#project-div1").mouseenter(function(){
  $('.project-title1').css("opacity", 1);
})

$("#project-div2").mouseenter(function(){
  $('.project-title2').css("opacity", 1);
})

$("#project-div3").mouseenter(function(){
  $('.project-title3').css("opacity", 1);
})

$("#project-div4").mouseenter(function(){
  $('.project-title4').css("opacity", 1);
})

$("#project-div5").mouseenter(function(){
  $('.project-title5').css("opacity", 1);
})

$("#project-div1").mouseleave(function(){
  $('.project-title1').css("opacity", 0);
})

$("#project-div2").mouseleave(function(){
  $('.project-title2').css("opacity", 0);
})

$("#project-div3").mouseleave(function(){
  $('.project-title3').css("opacity", 0);
})

$("#project-div4").mouseleave(function(){
  $('.project-title4').css("opacity", 0);
})

$("#project-div5").mouseleave(function(){
  $('.project-title5').css("opacity", 0);
})
