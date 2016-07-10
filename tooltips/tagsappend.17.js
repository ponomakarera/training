$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = total_posts / 20;
			var match = /(.+)\.\.(.+)/;
			
			for (var i = 0; i <= count; i++) {
				$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						for (var j in data.response.posts[i].tags) {
							if (data.response.posts[i].tags[j].match(match)) {
								console.log("$1 = "+ RegExp.$1 +" $2 = "+ RegExp.$2);
								$("#"+ RegExp.$1).append("<li class='closed'><a href='http://tagmani.tumblr.com/tagged/"+ RegExp.$3 +"'>"+ RegExp.$3 +"</a><ul id='"+ RegExp.$3 +"'><li><a href='http://tagmani.tumblr.com/tagged/"+ RegExp.$2 +".."+ RegExp.$3 +"'>ローカルルール</a></li></ul></li>");
							}
						}
					}
				});
			}			
	});
	
});
