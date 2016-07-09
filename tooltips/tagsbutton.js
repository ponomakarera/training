function tags(postid){
   $("."+postid+"").click(function () {
     if ($("#"+ postid +"").is(":hidden")) {
        $("#"+ postid +"").slideDown();
     } else {
        $("#"+ postid +"").slideUp();
     }
   });
}
