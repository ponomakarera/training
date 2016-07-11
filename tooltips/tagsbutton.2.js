function tags(postid, tag){
   $("."+postid+"").click(function () {
     if ($("#"+ postid +"").is(":hidden")) {
        $("#"+ postid +"").slideDown();
     } else {
        $("#"+ postid +"").slideUp();
     }
   });
   console.log(tag);
   if (tag.match(/^fusianasan$/)) {
   	console.log(hit);
			$("."+ postid +" .author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
   
}
