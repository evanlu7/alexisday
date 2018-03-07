$(document).ready(function () {
  //your code here
 var scroll_pos = 0;


 
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 50) {
      $("nav").css('background-color', 'white');
      $("nav a").css('color', 'black');
    } else {
      $("nav").css('background-color', 'transparent');
      $("nav a").css('color', 'white');
    }
  });




  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1150) {
      $(".social").addClass("animated bounceIn");
    } else {
      $(".social").addClass("");
    }

});




  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 500) {
      $(".a1").addClass("animated slideInRight");
       $(".a1").addClass('visibility: visible');
    } else {
        $(".a1").addClass('visibility: hidden');
    }

});


  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 800) {
      $(".a2").addClass("animated slideInRight");
       $(".a2").addClass('visibility: visible');
    } else {
        $(".a2").addClass('visibility: hidden');
    }

});  



});