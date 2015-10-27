$(function () {
    var total_posts = 0;
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&jsonp=?", function (data) {
        total_posts = data.response.total_posts;
    });
    
    var name = "wordlist";
    var number = 0;
    for (var i = 0; i <= total_posts / 20; i++) {
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?",function(data) {
        $(".addlink").each(function(){
		for (var i in data.response.posts) {
		    var txt = $(this).html();
		    $(this).html(txt.replace(new RegExp(data.response.posts[i].title),"<span id='wordlist'>"+data.response.posts[i].title+"</span>"));
		}
	});
    }
      );
    }
    
    number = 1;
    for (var i = 0; i <= total_posts / 20; i++) {
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?",function(data) {
	$(".addlink").each(function() {
		for (var i in data.response.posts) {
			var linkbody = data.response.posts[i].body;
			linkbody = linkbody.replace(/"/g,'&quot;');
			linkbody = linkbody.replace(/'/g,'&#39;');
			linkbody = linkbody.replace(/&/g,'&amp;');
			linkbody = linkbody.replace(/>/g,'&gt;');
			linkbody = linkbody.replace(/</g,'&lt;');
		    var txt = $(this).html();
		    $(this).html(txt.replace(new RegExp("<span id='wordlist'>"+data.response.posts[i].title+"</span>"),"<a  class='textlink' title='"+ linkbody +"'; href='"+data.response.posts[i].post_url+"' style='color:#0645ad '>"+data.response.posts[i].title+"</a>"));
		}
	});
    	$(document).ready(function(){
	 simple_tooltip(".textlink","tooltip");
});
    }
      );
    }
    
});
