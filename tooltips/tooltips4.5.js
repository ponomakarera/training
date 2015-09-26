function simple_tooltip(target_items, name){
 $(target_items).each(function(i){
 var id = $(this).attr('href').match(/(\d+)/);
 $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&id="+id[0]+"&jsonp=?", function(data){
 
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+data.response.posts[0].body+"</p></div>");
		
});

var my_tooltip = $("#"+name+i);

		if($(this).attr("title") != "" && $(this).attr("title") != "undefined"){

		$(this).removeAttr("title").mouseover(function(){console.log("hello ");
					my_tooltip.css({opacity:0.8, display:"none"}).fadeIn(400);
		}).mousemove(function(kmouse){console.log("little");
				var border_top = $(window).scrollTop();
				var border_right = $(window).width();
				var left_pos;
				var top_pos;
				var offset = 15;
				if(border_right - (offset *2) >= my_tooltip.width() + kmouse.pageX){
					left_pos = kmouse.pageX+offset;
					} else{
					left_pos = border_right-my_tooltip.width()-offset;
					}

				if(border_top + (offset *2)>= kmouse.pageY - my_tooltip.height()){
					top_pos = border_top +offset;
					} else{
					top_pos = kmouse.pageY-my_tooltip.height()-offset;
					}

				my_tooltip.css({left:left_pos, top:top_pos});
		}).mouseout(function(){console.log(" boy");
				my_tooltip.css({left:"-9999px"});
		});

		}
	});
}
$(document).ready(function(){
	 simple_tooltip("a","tooltip");
});
