function writeToConsole(whatever){
  console.log(whatever);
}

$(document).ready(function() {

    console.log('script loaded');

    function writeToBox(text){
      $('#area').html(text);
    }

    $('.text-buttons').click(function(){
      let buttonText = $(this).html() ;

      writeToBox(buttonText);
    });

    $('#input').click(function(){
       let inputText = $('#test-input').val();
       
       writeToBox(inputText);
    });



    // $(document).keypress(function(e){
    //   console.log(e.key);
    //   $('#area').text(e.key);
    // });

    // $(document).mousemove(function(e){
    //   console.log(e.pageX, e.pageY);
    // })

    $('#highlight').click(function(){

      $('p').toggleClass('highlight');
    
    });

    
    $('.menu-icon').click(function(){
      $('.menu').toggleClass('active');
    });

});


