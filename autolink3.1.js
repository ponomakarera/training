$.fn.addlink = function(baseURL){
  this.each(function() {
    var srcText = this.innerHTML;
    $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=%E3%83%A1%E3%83%A2&limit=50&jsonp=?",function(data) {
      	for (var i in data.response.posts) {
      	  srcText = srcText.replace(new RegExp(data.response.posts[i].title, "g"),"<a href='"+data.response.posts[i].post_url+"'>"+data.response.posts[i].title+"</a>");
      	}
      	this.innerHTML = srcText;
      });
  });
}
  
