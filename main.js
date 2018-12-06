$(document).ready(function(){

  //scrivo un nuovo messaggio, viene sparato in chat e il pc risponde OK dopo un secondo
  $('#messaggio').keypress(function(event){
    if (event.which == 13){
      var testoValue = $('#messaggio').val();
      var testoTemplate = $('.template .messaggiV').clone();
      var ora = (new Date().getHours() + ':' + aggiungiZero(new Date().getMinutes()));
      console.log(ora);

      testoTemplate.find('.messaggioUtente').text(testoValue);
      testoTemplate.find('.oraEsatta').text(ora);

      var ora = (new Date().getHours() + ':' + aggiungiZero(new Date().getMinutes()));
      console.log(ora);
      //funzione che aagiunge lo 0 se il numero è minore di 10
      function aggiungiZero(zero) {
        if (zero < 10) {
            zero = "0" + zero;
        }
        return zero;
      }

      $('.chat_container .chat.active').append(testoTemplate);
      $('#messaggio').val('');


      //funzione che risponde Ok dopo 1sec
      setTimeout(function(){
        var rispostaTemplate = $('.template .messaggiB').clone();
        rispostaTemplate.find('.messaggioPc').text('Ok');
        rispostaTemplate.find('.oraEsatta').text(ora);
        $('.chat_container .chat.active').append(rispostaTemplate);

      },1000);

    }
  });
//cercando col search in tutte le chat, scrivendo in maiuscolo o ninuscolo trova le chat richiamate dal nome e fa scomparire le altre
  $('#cercaChat').keyup(function() {

    var nomeCercato = $('#cercaChat').val().toLowerCase();
    console.log(nomeCercato);

    $('.single_chat').each(function(){

      var thisName = $(this).find('#name').text().toLowerCase();

      if (thisName.includes(nomeCercato)) {
        $(this).show();
      }
      else {
        $(this).hide();
      }
    });

  });

  //nella lista chat sinistra se clicco su una rimane evidenziata
  $('.single_chat').click(function(){
    $('.single_chat').removeClass('activebackground');
    $(this).addClass('activebackground');

    $('.chat').removeClass('active');

    var posizioneContatto = $(this).index();
    // console.log(posizioneContatto);
    $('.chat').eq(posizioneContatto).addClass('active');
  });

  //se clicco sulla freccia di una chat appare il dropmenu
  $(document).on('click', '.messaggiV i', function(){
    // alert('ciao')
    var thisDrop = $(this).siblings('.dropmenuV');

    if (thisDrop.hasClass('active')) {
      thisDrop.removeClass('active');
    }
    else {
      $('.dropmenuV').removeClass('active');
      thisDrop.addClass('active');
    }
  });
  //cliccando sulla dropmenu e su elimina messaggio il messaggio viene eliminato
  $(document).on('click', '.eliminaMessaggio', function(){
    // alert('ciao')
    var eliminaMessaggioParent = $(this).parent().parent().parent();

    eliminaMessaggioParent.remove();
  });

});
