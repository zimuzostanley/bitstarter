$(function(){
    $('.loginBtn').click(function(){
	alert('lgin');

    });

    $('.categoryBtn').click(function(){
    	$('.board-location').hide();
		$('.board-category').toggle();
		$('.locationBtn').parent().removeClass('active');
		$(this).parent().addClass('active');
	});	

	$('.locationBtn').click(function(){
		$('.board-category').hide();
		$('.board-location').toggle();
		$('.categoryBtn').parent().removeClass('active');
		$(this).parent().addClass('active');
	});	

});
