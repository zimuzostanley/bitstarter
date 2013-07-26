$(function(){
    $('.loginBtn').click(function(){
	FB.login(function(response){
	    if(response.authResponse){
		FB.api('/me', function(response){
		 console.log(response.email);   
		    
		});
	    }
	    else{
		console.log("not authorized");
		}
	}, {scope: 'email'});

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
