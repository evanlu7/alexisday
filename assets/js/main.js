$(document).ready(function() {
  var scroll_pos = 0;
// change background on intro animation


// shadow

$(document).ready(function(){
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
      $(".a2").addClass("animated rotateIn");
      $(".a2").addClass('visibility: visible');
    } else {
      $(".a2").addClass('visibility: hidden');
    }

  });

    $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 400) {
      $(".button").addClass("animated fadeInUpBig");
      $(".button").addClass('visibility: visible');
    } else {
      $(".button").addClass('visibility: hidden');
    }

  });






  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1200) {
      $(".cover").addClass("animated slideInRight");
      $(".cover").addClass('visibility: visible');
    } else {
      $(".cover").addClass('visibility: hidden');
    }

  });

    $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1200) {
      $(".cover2").addClass("animated slideInRight");
      $(".cover2").addClass('visibility: visible');
    } else {
      $(".cover2").addClass('visibility: hidden');
    }

  });

  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1400) {
      $(".quote1").addClass("animated fadeIn");
      $(".quote1").addClass('visibility: visible');
    } else {
      $(".quote1").addClass('visibility: hidden');
    }

  });


  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 1400) {
      $(".quote2").addClass("animated fadeIn");
      $(".quote2").addClass('visibility: visible');
    } else {
      $(".quote2").addClass('visibility: hidden');
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
    if (scroll_pos > 1150) {
      $(".social").addClass("animated bounceIn");
    } else {
      $(".social").addClass("");
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
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 2300) {
      $(".comp").addClass("animated slideInRight");
      $(".comp").addClass('visibility: visible');
    } else {
      $(".comp").addClass('visibility: hidden');
    };

  });

  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if (scroll_pos > 2300) {
      $(".coverh1").addClass("animated zoomInRight");
      $(".coverh1").addClass('visibility: visible');
    } else {
      $(".coverh1").addClass('visibility: hidden');
    };

  });



});