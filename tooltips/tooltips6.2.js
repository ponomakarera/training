function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+$(this).attr('title')+"</p></div>");
		var my_tooltip = $("#"+name+i);
		
		if($(this).attr("title") != "" && $(this).attr("title") != "undefined" ){
		
		$(this).removeAttr("title").mouseover(function(){
					my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
		}).mousemove(function(kmouse){
				var border_top = $(window).scrollTop(); 
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var right_pos = null;
				var offset = 20;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					}
				else if (border_right-my_tooltip.width()-offset < 0){
					left_pos = kmouse.pageX+offset;
					right_pos = offset;
					}
				else {
				  left_pos = border_right-my_tooltip.width()-offset;
				}
					
				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
					}	
				
				if (right_pos) {
				  my_tooltip.css({right:right_pos, left:left_pos, top:top_pos});
				}
				else {
				  my_tooltip.css({left:left_pos, top:top_pos});
				}
		}).mouseout(function(){
				my_tooltip.css({left:"-9999px"});				  
		});
		
		}

	});
}
