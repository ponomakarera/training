$(function () {
	
	var dic = {};
	var listnumber = 0;

	$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 50);
			
			for (var i = 0; i <= count; i++) {
				$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=50&offset="+ i * 50 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						dic[data.response.posts[i].title] = data.response.posts[i].id;
						listnumber++;
					}
					if (listnumber == total_posts) {
					
						Object.keys(dic).sort(function(a, b) {return b.length - a.length;}).forEach(function(key) {
							$("copymemo").append("'"+ key +"': '"+ dic[key] +"', ");
						});
					}
				});
			}	
	});
});
