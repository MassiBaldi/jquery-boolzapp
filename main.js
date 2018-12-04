$(document).ready(function(){

  $('#messaggio').keypress(function(event){

    if (event.which == 13){
      var testoValue = $('#messaggio').val();
      var testoTemplate = $('.template .messaggiV .verde');

      testoTemplate.text(testoValue);

      $('.chat').append(testoTemplate)
      $('#messaggio').val('');
    }
  });

  // $('.mic').click(function(){
  //   // alert('ciao');
  //   var testo = $('#messaggio').val();
  //   var smsClonato = $('.template .verde').clone();
  //   smsClonato.text(testo);
  //   $('.chat').append(smsClonato);
  //   $(smsClonato).addClass('active');
  //   $('#messaggio').val('');
  // });

});
