//Evento de scroll para reduzir o header

var isAnimating = false // Variavel para conseguir impedir bugs caso usuario vá muito rápido

$(document).ready(function() {
  $(window).scroll(function() {
      var previousScroll = 0;
      $(window).scroll(function() {
        var currentScroll = $(this).scrollTop();
        if (currentScroll < previousScroll) {
          if (!isAnimating) { //Verificação de animação para impedir os bugs citados acima
            $('header').animate({ top: '0px' }, 200, function() { // Animação de aumento do Header
              isAnimating = false;
            });
            isAnimating = true; // Confirmação da animação ter sido ativada
          }
        } else {
          // O usuário está rolando para baixo
          if (!isAnimating) {
            $('header').animate({ top: '-235px' }, 200, function() { // Diminuição do Header
              isAnimating = false;
            });
            isAnimating = true;
          }
        }
        previousScroll = currentScroll; // encontrando o scroll para saber se está subindo ou descendo
      });
  });
  });
// Evento de click na navegação de páginas para colocar a cor no botão selecionado

$('.menuop').click(function() {
  $('.menuop').removeClass('selected'); //Tira as marcações feitas antes
  $(`#${$(this).attr("id")}`).addClass('selected'); //Marca só a página clickada
})

function thumbOf(thumbEl){
  $(thumbEl).css("display", "none")
}

