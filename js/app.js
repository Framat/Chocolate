$(document).ready(function() {
  // SLOW SCROLL
  $(".slow").click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
              $('html,body').animate({
                  scrollTop: target.offset().top
              }, 1300);
              return false;
          }
      }
  });

  //SHOW "UP BUTTON" WHEN SCROLLING
  $(window).scroll(function()
  {
    if($(this).scrollTop()>300) $('.scrollup').fadeIn();
    else $('.scrollup').fadeOut();
  }
  );

});
