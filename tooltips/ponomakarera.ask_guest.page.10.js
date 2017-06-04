(function () {

	var href = window.location.href ;
	
	if (href.match(new RegExp("https://ponomakarera.tumblr.com/ask")) || href.match(new RegExp("https://ponomakarera.tumblr.com/submit"))) {
		$(function () { $("script").closest(".addlink").removeClass("addlink"); });
	}
	
})();
