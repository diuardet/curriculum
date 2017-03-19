$(document).ready(function(){
  $('.Menu_ed').click(function(){
    $('body, html').animate({
      scrollTop: $("#EduyFor").offset().top
    }, 500);
  });
});
