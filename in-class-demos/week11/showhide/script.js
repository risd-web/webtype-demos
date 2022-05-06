$(document).ready(function(){   

  $.getJSON("dishes.json")
      .done(function( data ) {
         console.log(data);
        
        $('.item').click(function(){

            //get id of the item that has been clicked on
            //$(this) refers to the particular <div class="item"> that was clicked
            let key = $(this).attr('id');
            // console.log(key);

            //use that id to access data
            let info = data[key];
            // console.log(info);

            //get the ingredients data of that specific item
            let ingredients = info["ingredients"]; // or info.ingredients

            if( $(this).hasClass('active') ){
              //if already activated, this means panel is open
              //so hide panel
              $('#panel').removeClass('show');
            }else{
              //otherwise, you are clicking a new item

              //remove active class that marks which item was previously clicked
              $('.active').removeClass('active');

              //populate panel with new info
              $('#ingredients').html(ingredients);

              //open up panel
              $('#panel').addClass('show');

              //add active class to clicked item
              $(this).addClass('active');
            }
        });

      });

}); 
  