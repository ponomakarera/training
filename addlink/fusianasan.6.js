function fusianasan(postid, tag){
	if (tag.search(/^fusianasan$/)) {
		$("."+ postid +".author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
}
