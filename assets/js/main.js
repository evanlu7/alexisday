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
    if (scroll_pos > 90) {
      $(".social").addClass("animated bounceIn");
    } else {
      $(".social").addClass("");
    }

});



  $(".a1").addClass('visibility: hidden');
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 800) {
      $(".a1").addClass("animated slideInRight");
       $(".a1").addClass('visibility: visible');
    } else {
        $(".a1").addClass('visibility: hidden');
    }

});



$(document).scroll(function() {
  scroll_pos = $(this).scrollTop();

  if (scroll_pos > 50) {
    $("button").css('background-color', '');
    $("button").addClass('animated flip');
    $("button").addClass('visibility: visible');

  } else {
    $("button").css('background-color', '');
    $("button").addClass('');
  }

});

});