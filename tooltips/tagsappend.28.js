$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = total_posts / 20;
			
			for (var i = count; i >= 0; i--) {
				$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i = data.response.posts.length - 1; i >= 0; i--) {
						console.log(data.response.posts.length);
						for (var j in data.response.posts[i].tags) {
							console.log(data.response.posts[i].tags[j]);
							if (data.response.posts[i].tags[j].match(/(.+)\.\.(.+)/)) {
								var major = RegExp.$1;
								var minor = RegExp.$2;
								console.log("$1 = "+ major +" $2 = "+ minor);
								$("#"+ major).append("<li class='closed'><a href='http://tagmani.tumblr.com/tagged/"+ minor +"'>"+ minor +"</a><ul id='"+ minor +"'><li><a href='http://tagmani.tumblr.com/tagged/"+ major +".."+ minor +"'>ローカルルール</a></li></ul></li>");
							}
						}
					}
				});
			}			
	});
	
});
