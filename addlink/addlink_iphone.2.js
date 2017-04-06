$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 50);
			
			for (var i = 0; i <= count; i++) {
				$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=50&offset="+ i * 50 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						array[listnumber++] = data.response.posts[i].title;
						body[data.response.posts[i].title] = data.response.posts[i].body;
						url[data.response.posts[i].title] = data.response.posts[i].post_url;
					}
					if (listnumber == total_posts) {
						array.sort();
						array.sort(function(a, b) {return b.length - a.length;});
		
						$(".addlink").each(function(){
							var txt = $(this).html();
							var contents = [];
							while (txt.match(/<linkcancel>(?!<\/linkcancel>)[\s\S]+?<\/linkcancel>/)) {
								txt = txt.replace(new RegExp(/<linkcancel>(?!<\/linkcancel>)([\s\S]+?)<\/linkcancel>/),"<linkcancel></linkcancel>");
								contents.push(RegExp.$1);
							}
							for (var i = 0; i < array.length; i++) {
								txt = txt.replace(new RegExp(array[i], "g"),"<span id='"+ i +"'></span>");
							}
							for (var i = 0; i < contents.length; i++) {
								txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents[i] +"</linkcancel>");
							}
							$(this).html(txt);
						});
						
						$(".addlink").each(function(){
							var txt = $(this).html();
							for (var i = 0; i < array.length; i++) {
								if (($(this).hasClass(array[i]))) {
									txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
								}
								else {
									if (txt.match("<span id=."+ i +".></span>")) {
										txt = txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' href='"+url[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>");
										txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
									}
								}
							}
							$(this).html(txt);
						});
					}
				});
			}
			
	});
});
