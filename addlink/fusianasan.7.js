function fusianasan(postid, tag){
	console.log(tag);
	if (tag.match(/^fusianasan$/)) {
		$("."+ postid +".author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
}
