
let factList;

function getFact( ){
  $.getJSON("https://cat-fact.herokuapp.com/facts/")
    .done(function( data ) {
        console.log(data);
        factList = data; // store data
        displayFact(0);
      });
}  

function displayFact(factIndex){
  let fact = factList[factIndex];
  let text = fact.text;
  $('#fact').html(text);
}


$(document).ready(function() {

    let factCount = 0;

    getFact();

    $("#refresh").click(function(){

     if(factCount < 4){        
        factCount ++; // increment fact index until 5
        displayFact(factCount);
      }else{
        factCount = 0; // reset fact index
      }  
       
    });

});