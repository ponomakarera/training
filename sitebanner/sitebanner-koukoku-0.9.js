(function () {

	//link
	var linkurl = [
	  'https://ponomakarera.com/downloads/tag/tumblr%E3%83%86%E3%83%BC%E3%83%9E/',//WPのtumblrテーマタグ
	]
	
	//image
	var image = [
	  'https://78.media.tumblr.com/bf934e8b58cffe28aacd0f52045cc5dc/tumblr_pee3d5Na9z1xeooa7o1_540.jpg',//WPのtumblrテーマタグ
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	var antenna = document.getElementsByClassName("antenna");
	
	antenna[0].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo ads" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';
	antenna[1].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';

})();
