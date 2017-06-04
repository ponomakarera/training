$(function () {

	var href = window.location.href ;
	var formpage = document.getElementsByClassName('addlink');
	
	if (href.match(new RegExp("https://ponomakarera.tumblr.com/ask")) || href.match(new RegExp("https://ponomakarera.tumblr.com/submit"))) {
		formpage.classList.remove('addlink');
	}
	
});
