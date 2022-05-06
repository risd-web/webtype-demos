$(document).ready(function(){   

  let bodykey = $('body').attr('data-key');

  $.getJSON("dishes.json")
      .done(function( data ) {
         console.log(data);

         for( let i = 0; i<data.length; i++){
            let item = data[i];
            //output each item into HTML

             console.log(i, item); //check index and item in console

            //you can output each item into HTML
             let element = `<div class="item">
               <div class="name">${item.recipe}</div>
               <div class="prep">${item.prep} minutes</div>
             </div>`

             $('#items').append(element);


             //or you can try to find the particular item
             //you ar elooking for by seeing if it matches
             //your marker for that page

             if(bodykey == item.key){
               //this page has the key that matches
               //the "key" property value for the item 
               let info = item;

               //now you can do stuff with that info
               //and add into your placeholders
               $('#recipe').text(info.recipe);
               $('#ingredients').text(info.ingredients);
             }
          
         }

      });

}); 
  