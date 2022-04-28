$(document).ready(function(){   

  $.getJSON("dishes.json")
      .done(function( data ) {
         console.log(data);
         // let saladname = data[0].recipe;

         // $('.salad').text( saladname );

         for(let i = 0; i<data.length; i++ ){
           console.log(i, data[i]);
           $('.recipe-names').append('<div class="recipe">' + data[i].recipe +'</div>')
         }
      });

}); 
  