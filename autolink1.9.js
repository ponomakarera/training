$.fn.addlink = function(baseURL){
    var dict = [];
                dict.push("test");
                dict.push("http://ponomakarera.tumblr.com/post/129834164555/test")
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i], "g"),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
