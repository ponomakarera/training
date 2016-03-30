$(function () {
    var total_posts = 0;
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&jsonp=?", function (data) {
        total_posts = data.response.total_posts;
    });
    
	var array = new Array();
	var listnumber = 0;
	var linkbody = {};
	var linkurl = {};
    for (var i = 0; i <= total_posts / 20; i++) {
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?",function(data) {
		
		for (var i in data.response.posts) {
			array[listnumber++] = data.response.posts[i].title;
			linkbody[data.response.posts[i].title] = data.response.posts[i].body;
			linkurl[data.response.posts[i].title] = data.response.posts[i].post_url;
		}
	});
	}
		array.sort();
		array.sort(function(a, b) {return b.length - a.length;});
		
	$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&jsonp=?", function (data) {	
		$(".addlink").each(function(){
			for (var i = 0; i < array.length; i++) {
				var txt = $(this).html();
				$(this).html(txt.replace(new RegExp(array[i]+"(?!.+</span>)", "g"),"<span id='wordlist'>"+array[i]+"</span>"));
			}
		});
		
		var forward = '<span id="wordlist">';
		var back = '</span>';
		var htmlbody;
		
		$(".addlink").each(function(){
			for (var i = 0; i < array.length; i++) {
				htmlbody = linkbody[array[i]];
				htmlbody = htmlbody.replace(/"/g,'&quot;');
				htmlbody = htmlbody.replace(/'/g,'&#39;');
				htmlbody = htmlbody.replace(/&/g,'&amp;');
				htmlbody = htmlbody.replace(/>/g,'&gt;');
				htmlbody = htmlbody.replace(/</g,'&lt;');
				var txt = $(this).html();
				if (!($(this).hasClass(array[i]))) {
					$(this).html(txt.replace(new RegExp(forward+array[i]+back),"<a  class='textlink' title='"+ htmlbody +"'; href='"+linkurl[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>"));
				}
			}
		});
		
		$(document).ready(function(){
			simple_tooltip(".textlink","tooltip");
		});
	});
});
