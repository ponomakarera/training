$(function () {

	//device check
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		//smartphone
	} 
	else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		//tablet
	}
	else {
		//pc
		simple_tooltip("textlink","tooltip");
	}

	function simple_tooltip(target, reference){

		var my_tooltip;
		var tooltip_exist = {};
		var mousepoint;
	
		$("."+target).mouseover(function() {
	
			$(".tooltip").css({left:"-9999999px", top:"-9999999px"});
			var i = $(this).attr('id');
			if(!tooltip_exist[i]) { tooltip_exist[i] = true; addtooltip(i); }
			my_tooltip = $("#"+reference+i);
			my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);	
		
		}).mousemove(function(kmouse) {
	
			mousepoint = kmouse
			setpos();
		
		});
		
		$("#container").mouseover(function() {
		
			$(".tooltip").css({left:"-9999999px", top:"-9999999px"});	
		
		});
	
		function addtooltip(i) {
			$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&id="+ i +"&jsonp=?", function (data) {
				$("body").append("<div class='tooltip' id='"+ reference+ i +"'><p>"+ data.response.posts[0].body +"</p></div>");
				if($(':hover').is("#"+ i)) {
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
				}
			});
		}
	
		function setpos() {
			var border_top = $(window).scrollTop(); 
			var border_right = $(window).width();
			var left_pos;
			var top_pos;
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
});
