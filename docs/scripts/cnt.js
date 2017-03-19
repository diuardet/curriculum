$(document).ready(function(){
  $('.Menu_contacto').click(function(){
    $('body, html').animate({
      scrollTop: $("#Contacto").offset().top
    }, 500);
  });
});
