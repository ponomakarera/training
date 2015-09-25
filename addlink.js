$.fn.addlink = function(baseURL){
    var dict = ["富士山", "http://ponomakarera.tumblr.com/post/129829397015/%E3%83%86%E3%82%B9%E3%83%88",
                "京都","http://ja.wikipedia.org/wiki/京都市",
                "秋葉原","http://ja.wikipedia.org/wiki/秋葉原",
                "築地市場","http://ja.wikipedia.org/wiki/築地市場", 
                "テスト","http://ponomakarera.tumblr.com/post/129829397015/%E3%83%86%E3%82%B9%E3%83%88",
                "foo","http://ponomakarera.tumblr.com/post/127453300739/%E3%82%B7%E3%82%A7%E3%83%B3%E3%83%A0%E3%83%BC%E3%81%AE%E3%83%90%E3%82%B0%E5%8B%95%E7%94%BB%E3%81%AF%E3%82%B9%E3%83%BC%E3%83%AB%E3%81%86%EF%BD%90%E3%81%95%E3%82%93%E3%81%8B%E3%82%89%E5%BC%95%E7%94%A8",
				];
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i]),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
