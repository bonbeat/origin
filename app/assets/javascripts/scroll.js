$(document).on("ready", function(){
  if ($('#scrollTop').length) {
    var scrollTrigger = 100, // px
    
    backToTop = function () {
      var scrollTop = $(window).scrollTop();
      
      if (scrollTop > scrollTrigger) {
        $('#scrollTop').show("fade", {
          duration: 500,
          easing: 'easeOutQuint'
        });
      } else {
        $('#scrollTop').hide("fade", {
          duration: 500,
          easing: 'easeOutQuint'
        });
      }
    };
    
    backToTop();
    
    $(window).on('scroll', function () {
      backToTop();
    });
    
    $('#scrollTop').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
        scrollTop: 0
      }, 700);
    });
  };
  
  $(".button-portfolio").click(function (){
    $('html, body').animate({
      scrollTop: $(".portfolio").offset().top
    }, 1000);
  });
});