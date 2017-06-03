function simple_tooltip(target, reference){

	var my_tooltip;
	var tooltip_exist = {};
	var mousepoint;
	
	$("."+target).mouseover(function() {
	
		var i = $(this).attr('id');
		if(!tooltip_exist[i]) { tooltip_exist[i] = true; addtooltip(i); }
		my_tooltip = $("#"+reference+i);
		my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);	
		
	}).mousemove(function(kmouse) {
	
		mousepoint = kmouse
		setpos();
		console.log("mousemove my_tooltip.height is "+ my_tooltip.height());
		
	}).mouseout(function(){
	
		my_tooltip.css({left:"-9999999px"});				  
	
	});
	
	function addtooltip(i) {console.time("getjson");
		$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&id="+ i +"&jsonp=?", function (data) {
			$("body").append("<div class='tooltip' id='"+ reference+ i +"'><p>"+ data.response.posts[0].body +"</p></div>"); console.timeEnd("getjson");
			console.time("length"); if($(":hover #"+ i).length) {console.timeEnd("length");
				my_tooltip = $("#"+reference+i);
				my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
				if ($("#"+ reference+ i +" img").length) {
					$("#"+ reference+ i +" img").on('load',function(){
						setpos();
					});
				}
				else {
					setpos();
				}
				console.log("getjson my_tooltip.height is "+ my_tooltip.height());
			}
		});
	}
	
	function setpos() {
		var border_top = $(window).scrollTop(); 
		var border_right = $(window).width();
		var left_pos;
		var top_pos;
		var right_pos;
		var offset = 20;
		
		if(border_right - (offset *2) >= my_tooltip.width() + mousepoint.pageX){
			left_pos = mousepoint.pageX+offset;
		}
		else if (border_right-my_tooltip.width()-offset < 0){
			left_pos = 0;
		}
		else {
			left_pos = border_right-my_tooltip.width()-offset;
		}
				
		if(border_top + (offset *2)>= mousepoint.pageY - my_tooltip.height()){
			top_pos = border_top +offset;
		} else{
			top_pos = mousepoint.pageY-my_tooltip.height()-offset;
		}
		my_tooltip.css({left:left_pos, top:top_pos});
	}
}
