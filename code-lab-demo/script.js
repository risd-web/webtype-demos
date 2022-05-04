$(document).ready(function(){
	console.log('hello');
	let height = document.body.scrollHeight;
	let section = height/3;
	console.log(height, section);

	$(window).scroll(function () {
		console.log('scroll!');
		let position = $(this).scrollTop();
		console.log(position);

		if( position < section){
			console.log('first');
			$('#box3').css('opacity', getRatio(position, section));
		}else if( position < (section+section) ){
			console.log('second');
			let new_position = position - section;
			$('#box2').css('opacity', getRatio(new_position, section));
		}else if( position < height){
			console.log('third');
		}
	});
});

function getRatio(position, section_height){
	let ratio =  1 - (position/section_height);
	console.log(ratio);
	return ratio;
}

function monthDiff(dateFrom, dateTo) {
 return dateTo.getMonth() - dateFrom.getMonth() + 
   (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}
// console.log( monthDiff(new Date(2001, 01), new Date()), 'months');

