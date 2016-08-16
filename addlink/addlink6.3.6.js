$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.when($.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = Math.floor(total_posts / 20);
		console.log("process 1");
	}),
	function() {
		for (var i = 0; i <= count; i++) {
				$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						array[listnumber++] = data.response.posts[i].title;
						var linkbody = data.response.posts[i].body;
						linkbody = linkbody.replace(/"/g,'&quot;');
				    		linkbody = linkbody.replace(/'/g,'&#39;');
				    		linkbody = linkbody.replace(/&/g,'&amp;');
				    		linkbody = linkbody.replace(/>/g,'&gt;');
				    		linkbody = linkbody.replace(/</g,'&lt;');
						body[data.response.posts[i].title] = linkbody;
						url[data.response.posts[i].title] = data.response.posts[i].post_url;
					}
					console.log("process 2");
				});
			}
			
	}).done(function() {
	console.log("process 3");
		array.sort();
		array.sort(function(a, b) {return b.length - a.length;});
		
		$(".addlink").each(function(){
			var txt = $(this).html();
			var contents = "";
			txt = txt.replace(new RegExp("<linkcancel>(.+)</linkcancel>"),"<linkcancel></linkcancel>");
			contents = RegExp.$1;
			for (var i = 0; i < array.length; i++) {
				txt = txt.replace(new RegExp(array[i], "g"),"<span id='"+ i +"'></span>");
			}
			txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents +"</linkcancel>");
			$(this).html(txt);
		});
		$(".addlink").each(function(){
			var txt = $(this).html();
			for (var i = 0; i < array.length; i++) {
				if (($(this).hasClass(array[i]))) {
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
				}
				else {
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' title='"+ body[array[i]] +"'; href='"+url[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>");
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
				}
			}
			$(this).html(txt);
		});
		
		$(document).ready(function(){
			simple_tooltip(".textlink","tooltip");
		});
	});
});
