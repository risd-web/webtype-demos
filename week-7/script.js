$(document).ready(function(){

	const wghtmax = 900;
	const wdthmax = 150;

	//standard sliders
	$('.axis-range').on('input', function(){

		let value = parseInt($(this).val()); //get slider input value
		const slidertype = $(this).data('slidertype'); //get slider axis

		$('#bigletter').css("--"+slidertype, value);

	});

	//click buttons
	$('#default').click(function(event) {
		$("#content").css({
			"--wdth":100,
			"--wght": 400,
			"--XHGT": 0
		});	
	});

	$('#thincomp').click(function(event) {
		$("#content").css({
			"--wdth": 40,
			"--wght": 100,
			"--XHGT": 0
		});	
	});

	$('#blackext').click(function(event) {
		$("#content").css({
			"--wdth": 150,
			"--wght": 900,
			"--XHGT": 0
		});	
	});


	//mouseposition
	$('#intro').mousemove(function(event) {
		let cursorX = event.pageX / $(this).width();
		let cursorY = 1 - (event.pageY) / $(this).height();

		let settingX = Math.floor(cursorX * wdthmax);
		let settingY = Math.floor(cursorY * wghtmax);

		// console.log( settingX, settingY)

		$("#bigletter").css({
			"--wdth": settingX,
			"--wght": settingY
		});
		
	});
});