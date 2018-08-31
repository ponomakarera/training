(function () {

	//link
	var linkurl = [
	  'https://ponomakarera.social/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	]
	
	//image
	var image = [
	  'https://78.media.tumblr.com/f6b8c179b61e270738058ca468c3c5eb/tumblr_peb7r1HpJG1xeooa7o1_400.jpg',//妄想都市
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	var antenna = document.getElementsByClassName("antenna");
	
	antenna[0].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo ads" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';
	antenna[1].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';

	console.log(antenna);
})();
