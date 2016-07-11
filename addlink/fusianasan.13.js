function fusianasan(postid, title){
	if (title.match(/^fusianasan$/)) {
			$("."+ postid +" .author").empty();
			$("."+ postid +" .author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
}

