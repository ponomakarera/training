$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
  $.ajaxSetup({ cache: true});
  
	$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
      $.ajaxSetup({ cache: true});
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 50);
			var addlinkcount = 0;
			
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
						var contents = [];
						
						for (var i = 0; i < array.length; i++) {
							contents.push("<memo><title>"+ array[i] +"</title><naiyou>"+ body[array[i]] +"</naiyou><memourl>"+ url[array[i]] +"</memourl></memo>");
							
							/*$("test").append("<memo><title>"+ array[i] +"</title><naiyou>"+ body[array[i]] +"</naiyou><memourl>"+ url[array[i]] +"</memourl></memo>");*/
						}

						console.log(contents);
						
					}
				});
			}
			
	});
});
