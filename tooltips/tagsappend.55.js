var dic = {};

$(function () {
	
	
	$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 20);
			
			for (var i = count; i >= 0; i--) {
				$.getJSON("http://api.tumblr.com/v2/blog/tagmani.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i = data.response.posts.length - 1; i >= 0; i--) {
						for (var j in data.response.posts[i].tags) {
							if (data.response.posts[i].tags[j].match(/(.+)→(.+)/)) {
								var oldtag = 0;
								for (var key in dic) {
									if (key.match(new RegExp(data.response.posts[i].tags[j]))) {
										oldtag = 1;
										break;
									}
								}
								if (!oldtag) {
									var major = RegExp.$1;
									var minor = RegExp.$2;
									var targetElem = document.getElementById(major);
									if(targetElem){
										$("#"+ major).append("<li id='listid"+ minor +"'><a href='http://tagmani.tumblr.com/tagged/"+ minor +"'>"+ minor +"</a><ul id='"+ minor +"'><li><a href='http://tagmani.tumblr.com/tagged/"+ major +"→"+ minor +"'>ローカルルール</a></li></ul></li>");
										dic[major +"→"+ minor] = "0";
									}
								}
							}
							else if (data.response.posts[i].tags[j].match(/^削除$/)) {
								for (var j in data.response.posts[i].tags) {
									if (data.response.posts[i].tags[j].match(/(.+)←(.+)/)) {
										var major = RegExp.$1;
										var minor = RegExp.$2;
										$("#"+ major +" li").remove("#listid"+ minor);
										deltreenest(major, minor);
									}
								}
							}
						}
					}
				});
			}			
	});
	
});

$(funciton deltreenest(major, minor) {
	for (var key in dic) {
											if (key.match(new RegExp(minor +"→(.+)"))) {
												deltreenest(minor, RegExp.$1);
											}
											delete dic[major +"→"+ minor];
										}
});
