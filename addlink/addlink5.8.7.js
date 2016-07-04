$(function () {
	
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=1&jsonp=?", function (data) {
			
			var total_posts = data.response.total_posts;
			var count = total_posts / 20;
			for (var i = 0; i <= count; i++) {
				$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?", function (data) {
					for (var i in data.response.posts) {
						array[listnumber++] = data.response.posts[i].title;
						body[data.response.posts[i].title] = data.response.posts[i].body;
						url[data.response.posts[i].title] = data.response.posts[i].post_url;
					}
				});
			}
			
	});
	
	$(window).load(function() {
	
		array.sort();
		array.sort(function(a, b) {return b.length - a.length;});
		
		$(".addlink").each(function(){
			for (var i = 0; i < array.length; i++) {
				var txt = $(this).html();
				$(this).html(txt.replace(new RegExp(array[i], "g"),"<span id='"+ i +"'></span>"));
			}
		});
		$(".addlink").each(function(){
			for (var i = 0; i < array.length; i++) {
				var linkbody = body[array[i]];
				linkbody = linkbody.replace(/"/g,'&quot;');
				linkbody = linkbody.replace(/'/g,'&#39;');
				linkbody = linkbody.replace(/&/g,'&amp;');
				linkbody = linkbody.replace(/>/g,'&gt;');
				linkbody = linkbody.replace(/</g,'&lt;');
				var txt = $(this).html();
				if (($(this).hasClass(array[i]))) {
					$(this).html(txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]));
				}
				else {
					$(this).html(txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' title='"+ linkbody +"'; href='"+url[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>"));
					txt = $(this).html();
					$(this).html(txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]));
				}
			}
		});
		
		$(document).ready(function(){
			simple_tooltip(".textlink","tooltip");
		});
	});
});
