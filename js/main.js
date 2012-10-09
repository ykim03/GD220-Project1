$(function(){
	
	var sections = $('#content').find('.section')
	
		sections.hide().eq(0).show();
	
	var links = $('#header .nav a');
		links.removeClass('here');
		links.eq(0).addClass('here');
	
	links.on('click',function(e){
		e.preventDefault();
		var url = $(this).attr('href');
		
		$(this).addClass('here');
		
		sections.hide();

		$(url).show();
		
	});
	
});
