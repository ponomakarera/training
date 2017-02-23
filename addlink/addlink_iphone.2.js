$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var url = {};
	
	$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 20);
			
			for (var i = 0; i <= count; i++) {
				$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						array[listnumber++] = data.response.posts[i].title;
						url[data.response.posts[i].title] = data.response.posts[i].post_url;
					}
					if (listnumber == total_posts) {
						array.sort();
						array.sort(function(a, b) {return b.length - a.length;});
		
						$(".addlink").each(function(){
							var contents = [];
							$("linkcancel", this).each(function(){
								contents.push($(this).html());
								$(this).empty();
							});
							var txt = $(this).html();
							for (var i = 0; i < array.length; i++) {
								txt = txt.replace(new RegExp(array[i], "g"),"<span id='"+ i +"'></span>");
							}
							$(this).html(txt);
							$("linkcancel", this).each(function(){
								$(this).append(contents.shift());
							});
						});
						$(".addlink").each(function(){
							var txt = $(this).html();
							for (var i = 0; i < array.length; i++) {
								if (($(this).hasClass(array[i]))) {
									txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
								}
								else {
									txt = txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' href='"+url[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>");
									txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
								}
							}
							$(this).html(txt);
						});
					}
				});
			}
			
	});
});
