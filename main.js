$(document).ready(function(){

  $('#messaggio').keypress(function(event){

    if (event.which == 13){
      var testoValue = $('#messaggio').val();
      var testoTemplate = $('.template .messaggiV').clone();

      testoTemplate.children('.verde').text(testoValue);
      
      $('.chat').append(testoTemplate)
      $('#messaggio').val('');
    }
  });

});
