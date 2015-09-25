$.fn.addlink = function(baseURL){
      console.log(dict[1]);
      console.log(dict.length);
    return this.each(function(){
        var srcText = this.innerHTML;
        for (var i=0; i<dict.length; i+=2){
            srcText = srcText.replace(new RegExp(dict[i], "g"),"<a href='"+dict[i+1]+"'>"+dict[i]+"</a>");
        }
        this.innerHTML = srcText;
    });
}
