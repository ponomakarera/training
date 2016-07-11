function tags(postid){
   $("."+postid+".tagsbutton").click(function () {
     if ($("#"+ postid +"").is(":hidden")) {
        $("#"+ postid +"").slideDown();
     } else {
        $("#"+ postid +"").slideUp();
     }
   });
}
