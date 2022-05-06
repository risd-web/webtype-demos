$(document).ready(function(){   

  let thispage_key = $('body').attr('data-key');
  console.log(thispage_key);

  let info;
  $.getJSON("dishes_withkeys.json")
      .done(function( data ) {
         console.log(data);
        
         //populate the appropriate ingredients
         //from the data-key attribute on the page body
        let page_info = data[thispage_key];
        $('#ingredients').html(page_info.ingredients);

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

            $('#ingredients').html(ingredients);
        });

      });

}); 
  