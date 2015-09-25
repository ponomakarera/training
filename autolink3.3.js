$.fn.addlink = function(baseURL){
var dict = [];
var tumblr = require('https://npmjs.org/package/tumblr.js');
var client = tumblr.createClient({ consumer_key: '1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V' });

// Make the request
client.posts('ponomakarera.tumblr.com', { tag: 'メモ' }, function (err, data) {
    for (var i in data.response.posts) {
      		dict.push(data.response.posts[i].title);
      	  dict.push(data.response.posts[i].post_url);
      	}
});
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i]),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
