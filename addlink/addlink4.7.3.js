$(function () {
    var total_posts = 0;
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&jsonp=?", function (data) {
        total_posts = data.response.total_posts;
    });
    
	var word;
    for (var i = 0; i <= total_posts / 20; i++) {
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=20&offset="+ i * 20 +"&jsonp=?",function(data) {
	
		$(".addlink").each(function(){
		
		for (var i in data.response.posts) {
		    var txt = $(this).html();
			word = data.response.posts[i].title;
			if (!($(this).hasClass(word))) {
			$(this).html(txt.replace(new RegExp(word, "g"),"<dic number='"+ word.length +"';></dic>"+word));
			var reg = new RegExp("number=\"(.+?)\".+number=\"(.+?)\".+"+word, "g");
			txt = $(this).html();
			if (txt.match(reg)) {
			console.log("$1:"+ RegExp.$1 +" $2:"+ RegExp.$2 +" word:"+ word);
			console.log(txt.match(reg));
				/*if (Number(RegExp.$1) < Number(RegExp.$2)) {
					$(this).html(txt.replace(new RegExp("number=.(\d+).+?number=.(\d+).+?"+word, "g"),"<dic number='"+ RegExp.$2 +"';></dic>"+word));
				}
				else {
					$(this).html(txt.replace(new RegExp("number=.(\d+).+?number=.(\d+).+?"+word, "g"),"<dic number='"+ RegExp.$1 +"';></dic>"+word));
				}*/
			}
			}
		}
		});
	
	
        $(".addlink").each(function(){
		for (var i in data.response.posts) {
			word = data.response.posts[i].title;
			var linkbody = data.response.posts[i].body;
			linkbody = linkbody.replace(/"/g,'&quot;');
			linkbody = linkbody.replace(/'/g,'&#39;');
			linkbody = linkbody.replace(/&/g,'&amp;');
			linkbody = linkbody.replace(/>/g,'&gt;');
			linkbody = linkbody.replace(/</g,'&lt;');
		    var txt = $(this).html();
			if (!($(this).hasClass(word))) {
		    $(this).html(txt.replace(new RegExp("<dic number='"+ word.length +"';></dic>"+word),"<a  class='textlink' title='"+ linkbody +"'; href='"+data.response.posts[i].post_url+"' style='color:#0645ad '>"+word+"</a>"));
		    }
		}
	});
	$(document).ready(function(){
	 simple_tooltip(".textlink","tooltip");
});
    });
      }});
