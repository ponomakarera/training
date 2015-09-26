$(function () {
    var total_posts = 0;
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&jsonp=?", function (data) {
        total_posts = data.response.total_posts;
    });
    
    for (var i = 0; i <= total_posts / 20; i++) {
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?",function(data) {
        $(".addlink").each(function(){
		for (var i in data.response.posts) {
		    var txt = $(this).html();
		$(this).html(txt.replace(new RegExp(data.response.posts[i].title),"<a  class='link' href='"+data.response.posts[i].post_url+"' style='color:#0645ad '>"+data.response.posts[i].title+"</a>"));}
	});
var target_items = ".link";
var name = "tootip";
$(target_items).each(function(i){
 var id = $(this).attr('href').match(/(\d+)/);
 $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&id="+id[0]+"&jsonp=?", function(data){
 
		$("body").append("<div class='"+name+"' id='"+name+i+"'><p>"+data.response.posts[0].body+"</p></div>");
		
});
    }
      );
    }
});
