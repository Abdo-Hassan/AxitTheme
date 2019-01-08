$(function(){

//import libraries
	//init the aos effects
		AOS.init();

	//trigger the nicescroll
		$("body").niceScroll({
		cursorcolor:"rgba(255, 139, 56, 1)",
		cursorwidth:"8px",
		cursorborder:"rgba(255, 139, 56, 1)",
		horizrailenabled:false
		});

//navbar scroll to section
	$('.navbar .navbar-collapse .nav-link').on('click',function(e){

		e.preventDefault();

		var navLink = $(this);

		console.log(navLink.attr('href'));

		$('html , body').animate({

			scrollTop: $(navLink.attr('href')).offset().top

		},1000);

	});

//make the scroll to top button
	var scroll_top = $('#scroll_top');

	$(window).scroll(function(){

		if($(this).scrollTop() >= 700){
			scroll_top.show();
		} else{
			scroll_top.hide();
		}

	});
	//click the button to top
		scroll_top.click(function(){
			$('html,body').animate({scrollTop:0},700);
		});


//adjust navbar scroll bg + fixed
	$(window).scroll(function() {
		var navbar = $('.navbar');

		if ($(this).scrollTop() >= navbar.height()) {

			if(!$('.navbar').hasClass('scrolled sticky-top')) {

				navbar.addClass('scrolled sticky-top');
			}

		} else {
			navbar.removeClass('scrolled sticky-top');
		}

	});

//deal with tabs
	$('.tab-switch li').click(function(){
		// add selected class to active link
		$(this).addClass('selected').siblings().removeClass('selected');

		//1- hide all divs
		$('.tabs .tabs-content > div').hide();

		//2- show div connected with this link
		$($(this).data('class')).show();
	})	

//clear form placeholder on focus
	var inputText = document.querySelector('.contact input[type=text]'),
			inputEmail = document.querySelector('.contact input[type=email]'),
			inputPassword = document.querySelector('.contact input[type=password]'),
			textArea = document.querySelector('.contact textarea');

//for name field
inputText.onfocus = function(){

	if(this.placeholder === "Your Name") {

		this.placeholder = '';
	} 

}

inputText.onblur = function(){

	if(this.placeholder === "") {

		this.placeholder = 'Your Name';
	} 

}

//for Email field
inputEmail.onfocus = function(){

	if(this.placeholder === "Your Email") {

		this.placeholder = '';
	} 

}

inputEmail.onblur = function(){

	if(this.placeholder === "") {

		this.placeholder = 'Your Email';
	} 

}

//for password field
inputPassword.onfocus = function(){

	if(this.placeholder === "Your Password") {

		this.placeholder = '';
	} 

}

inputPassword.onblur = function(){

	if(this.placeholder === "") {

		this.placeholder = 'Your Password';
	} 

}

//for textarea field
textArea.onfocus = function(){

	if(this.placeholder === "Message") {

		this.placeholder = '';
	} 

}

textArea.onblur = function(){

	if(this.placeholder === "") {

		this.placeholder = 'Message';
	} 

}

});