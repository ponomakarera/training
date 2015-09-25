$.fn.addlink = function(baseURL){
    var dict = [];
				$.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=50&jsonp=?",function(data) {
      	for (var i in data.response.posts) {
      	  dict.push(data.response.posts[i].title);
      	  dict.push(data.response.posts[i].post_url);
      	}
      });
      console.log(dict);
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i], "g"),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
