$(document).ready(function(){
  $('.Menu_exp').click(function(){
    $('body, html').animate({
      scrollTop: $("#ExpLaboral").offset().top
    }, 500);
  });
});
