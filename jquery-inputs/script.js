$(document).ready(function(){

	console.log('script loaded');

	// getters 
	// $('#plain').on('change', function(){
	// 	console.log($(this).val());
	// });

	// $('#options').on('change', function(){
	// 	 console.log($(this).val());
	// 	 let chocolate = $(this).val();

	// 	 $('#chocolate-choice').text(chocolate);
	// });


	$('form').submit(function(e){
	    console.log('submit');

	    let plain = $('#plain').val();
	    $('#plain-input').text(plain);

	   	let chocolate = $('#options').val();
	    $('#chocolate-choice').text(chocolate);

	    $('form').hide(); //hide form upon submission

	    $('#output').show(); //show output upon submission

	    return false;
	});


});



