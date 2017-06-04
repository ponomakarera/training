(function () {

	var href = window.location.href ;
	
	if (href.match(new RegExp("https://ponomakarera.tumblr.com/ask")) || href.match(new RegExp("https://ponomakarera.tumblr.com/submit"))) {
		document.getElementsByClassName('addlink')[0].classList.toggle('addlink');
	}
	
})();
