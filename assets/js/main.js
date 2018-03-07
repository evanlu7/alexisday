$(document).ready(function () {
  //your code here
 var scroll_pos = 0;




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


    $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1200) {
      $(".brands").addClass("animated bounceInRight");
       $(".brands").addClass('visibility: visible');
    } else {
        $(".brands").addClass('visibility: hidden');
    }

});  


    $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1200) {
      $(".brandTag").addClass("animated fadeInUpBig");
       $(".brandTag").addClass('visibility: visible');
    } else {
        $(".brandTag").addClass('visibility: hidden');
    }

});      



});