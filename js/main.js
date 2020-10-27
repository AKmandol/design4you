$(document).ready(function(){
    activeLinkControl()
    var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800,
	speedAsDuration: true
});
    var mixer = mixitup('.all-project');
});
   
   $('.carousel').carousel({
   interval : 2000,
   pause : 'hover',
   wrap : true,
   keyboard : true 
});

function activeLinkControl(){
    $('.navbar-nav .nav-item a').click(function (){
        $('.nav-item').removeClass('active');
        $(this).closest('.nav-item').addClass('active')
    })
}