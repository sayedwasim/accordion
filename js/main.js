$(document).ready(function(){
	/*---------- ACCORDION ----------*/
	$(".accordion .title").bind('click', function(e){
		if(!$(this).parent("li").hasClass("content-visible")){
			$(".accordion li").removeClass("content-visible");
			$(".accordion .desc").slideUp(200);
		}
		$(this).next('.desc').slideToggle(200).end().parent('li').toggleClass('content-visible');
		e.preventDefault();
	});
});