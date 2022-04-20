$(document).ready(function(){
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })

  $('#enviarCorreo').on('click', function(){
    alert ("El correo fue enviado correctamente");
  });

  $('.receta h5').on('dblclick',function(){
    $('.receta h5').css('color','black');
    $(this).css('color','red');
  })

  $('.cards-comidas .card').on('click', function(){
    $('.cards-comidas .card-body').toggle();
  })

})

