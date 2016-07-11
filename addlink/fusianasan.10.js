function fusianasan(postid, tag){
	if (tag.match(/^fusianasan$/)) {
			$("."+ postid +" .author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
}
