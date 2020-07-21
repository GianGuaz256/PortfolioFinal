$(document).ready(function(){
	$('.menu-toggler').on('click', function(){
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	$('.top-nav .nav-link').on('click', function(){
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	AOS.init({
		easing: 'ease',
		duration: 1800,
		once: true
	});
});

/*GET UP*/

const btn = document.getElementById("up");

btn.addEventListener("click", function(){
	$("html, body").animate({scrollTop: 0}, "slow");
});

/*PARTICLESJS*/

particlesJS.load('particles-js', 'particles.json', function(){
	console.log('particles.json loaded...');
});