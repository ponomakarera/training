$.fn.addlink = function(baseURL){
    var dict = ["富士山", "http://ja.wikipedia.org/wiki/富士山",
                "京都","http://ja.wikipedia.org/wiki/京都市",
                "秋葉原","http://ja.wikipedia.org/wiki/秋葉原",
                "築地市場","http://ja.wikipedia.org/wiki/築地市場", 
                "テスト","http://ponomakarera.tumblr.com/post/129829397015/%E3%83%86%E3%82%B9%E3%83%88",
				];
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i]),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
