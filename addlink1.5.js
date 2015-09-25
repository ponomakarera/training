$.fn.addlink = function(baseURL){
    var dict = ["富士山", "http://ponomakarera.tumblr.com/post/129834178750/test",
                "京都","http://ja.wikipedia.org/wiki/京都市",
                "秋葉原","http://ja.wikipedia.org/wiki/秋葉原",
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
