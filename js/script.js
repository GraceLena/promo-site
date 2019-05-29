$(function() {
	
	$('#menu-bars').on('click', function() {
		$(this).css({'display': 'none'});
		$('#menu-cross').css({'display': 'block'});
	});

	$('#menu-cross').on('click', function() {
		$(this).css({'display': 'none'});
		$('#menu-bars').css({'display': 'block'});
	});	
})