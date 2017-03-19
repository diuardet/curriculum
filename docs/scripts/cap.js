$(document).ready(function(){
  $('.Menu_cap').click(function(){
    $('body, html').animate({
      scrollTop: $("#CompPers").offset().top
    }, 500);
  });
});
