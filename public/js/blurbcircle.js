$(function(){
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

	$('.nav-collapse').on('click', '.logoutBtn', function(){
		FB.logout(function(response){
	    	console.log('loggin out');
    	   	userObject = {'username': '', 'loggedIn': false};
	    	$.ajax({
				url: 'http://www.blurbcircle.com/logout',
				data: userObject,
				success: function(data){   
					$('.container .nav-collapse').html(data);
				}
			});
		});
	});

	$('.nav-collapse').on('click', '.loginBtn', function(){
		FB.login(function(response){
	    if(response.authResponse){
			FB.api('/me', function(response){
				console.log(response.first_name);
				username = response.first_name;  
				userObject = {'username': username, 'loggedIn': true};
				$.ajax({
					url: 'http://www.blurbcircle.com/login/' + username,
					data: userObject,
					success: function(data){
						$('.container .nav-collapse').html(data);
					}
				}); 	
			});
	    }
	    else{
			console.log("not authorized");
		}
		}, {scope: 'email'});
	});

});
