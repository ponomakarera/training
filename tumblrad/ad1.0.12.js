$(function () {

	var linkurl = [
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	  'https://ponomakarera.tumblr.com/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%BD%9C%E5%AE%B6/chrono',//外国人作家一覧	
]
	
	var image = [
	  'https://68.media.tumblr.com/a42ff6d3f4ddb6734dec1672db2bb6b1/tumblr_o5xwixDP3z1t0jrzao1_500.png',
	  'https://68.media.tumblr.com/076e815b6c14450bddff046b0333d931/tumblr_ok75pcYIvw1t0jrzao1_500.png',
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	$('#adlink').attr("href", linkurl[rand]);
	$('#ad').attr("src", image[rand]);
	
});
