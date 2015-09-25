$.fn.addlink = function(baseURL){
    var dict = ["test", "http://ponomakarera.tumblr.com/post/129834164555/test",
                "富士山","http://ponomakarera.tumblr.com/post/129833777265/%E5%AF%8C%E5%A3%AB%E5%B1%B1",
                "秋葉原","http://ponomakarera.tumblr.com/post/129834634590/秋葉原",
                "築地市場","http://ja.wikipedia.org/wiki/築地市場" ];
                console.log(dict);
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i]),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
