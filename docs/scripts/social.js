$(document).ready(function(){
  $('.Menu_social').click(function(){
    $('body, html').animate({
      scrollTop: $("#Social").offset().top
    }, 500);
  });
});
