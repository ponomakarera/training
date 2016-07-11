function tags(postid){
   $("."+postid+"").click(function () {
     if ($("#"+ postid +"").is(":hidden")) {
        $("#"+ postid +"").slideDown();
     } else {
        $("#"+ postid +"").slideUp();
     }
   });
   
   if (tag.match(/^fusianasan$/)) {
			$("."+ postid +" .author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
   
}
