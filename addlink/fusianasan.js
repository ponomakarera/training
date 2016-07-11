function fusianasan(postid, fusianasan){
	if (fusianasan.match(/^fusianasan$/)) {
		$("."+ postid +" .author").append("<span>ID:<a href="{PostAuthorURL}">{PostAuthorName}</a></span>");
	}
}
