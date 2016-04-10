$(function () {
	
	var count = 50;
	var i = 0;
	var linkurl = new Array();
	var originalsize = new Array();
	var listnumber = 0;

	while (count--) {
		$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E5%BA%83%E5%91%8A&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
			for (var i in data.response.posts) {
				linkurl[listnumber] = data.response.posts[i].link_url;
				originalsize[listnumber] = data.response.posts[i].photos[0].original_size.url;
				listnumber++;
			}
		});
		i++;
	}
	
	var rand = Math.floor( Math.random() * listnumber );
	
	$("body").append("<div id='ad'><a href='"+linkurl[rand]+"'><img src='"+originalsize[rand]+"'></a></div>");
	
});
