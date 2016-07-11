function fusianasan(postid, tag){
console.log(tag);
	if (tag.match(/^fusianasan$/)) {
	console.log("hit);
			$("."+ postid +" .author").append("<span>ID:<a href='{PostAuthorURL}'>{PostAuthorName}</a></span>");
	}
}
