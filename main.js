$(document).ready(function(){

  $('.mic').click(function(){
    // alert('ciao');
    var testo = $('#messaggio').val();
    var smsClonato = $('.template .verde').clone();
    smsClonato.text(testo);
    $('.chat').append(smsClonato);
    $(smsClonato).addClass('active');
    $('#messaggio').val('');
  });

});
