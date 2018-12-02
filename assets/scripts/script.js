$(document).ready(function()  {

	$('.hidden').fadeIn(1000).removeClass('hidden');
	$(".navbar").css({ 'animation' : '' });
	
	 
	/* $(window).load(function() {
  	$("body").removeClass(".preload");
	});*/

	 $(".navbar-item").click(function(){

	 	let buttonName= $(this).text();

	 	$('.content').fadeOut(1000);
	 	

	 })



/*	 $(function(){
  	$(".navbar-item").bind("click",function(){
    $(this).animate({ $('.hidden').fadeOut(1000);
	}, 100, function(){
    window.location.href = $(this).attr("href");
  })
 })
})*/


});