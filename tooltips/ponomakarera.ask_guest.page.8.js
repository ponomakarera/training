(function () {

	var href = window.location.href ;
	
	if (href.match(new RegExp("https://ponomakarera.tumblr.com/ask")) || href.match(new RegExp("https://ponomakarera.tumblr.com/submit"))) {
		$($("script").closest(".addlink").removeClass("addlink");)
	}
	
})();
