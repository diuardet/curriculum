$(document).ready(function(){
  $('#Foto').click(function(){
    $('body, html').animate({
      scrollTop: $("#ExpLaboral").offset().top
    }, 500);
  });
});
