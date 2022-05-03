$(document).ready(function(){   

  $.getJSON("dishes_withkeys.json")
      .done(function( data ) {
         console.log(data);
        
        $('.item').click(function(){
            let key = $(this).attr('id');
            console.log(key);
            let info = data[key];
            console.log(info);
            let ingredients = info["ingredients"]; //info.ingredients

            $('#ingredients').html(ingredients);
        });
      });

}); 
  