$(document).ready(function(){
  $('#messaggio').keypress(function(event){
    if (event.which == 13){
      var testoValue = $('#messaggio').val();
      var testoTemplate = $('.template .messaggiV').clone();

      testoTemplate.children('.verde > .messaggioUtente').text(testoValue);
      testoTemplate.children('.verde > .oraEsatta').text(ora);

      var ora = (new Date().getHours() + ':' + aggiungiZero(new Date().getMinutes()));
      console.log(ora);

      function aggiungiZero(zero) {
        if (zero < 10) {
            zero = "0" + zero;
        }
        return zero;
      }

      $('.chat').append(testoTemplate);
      $('#messaggio').val('');

      setTimeout(function(){
        var rispostaTemplate = $('.template .messaggiB').clone();
        rispostaTemplate.children('.bianco').text('Ok');
        $('.chat').append(rispostaTemplate);
      },1000);
    }
  });

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


});
