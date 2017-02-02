$(function () {

	var linkurl = [
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	  'https://ponomakarera.tumblr.com/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%BD%9C%E5%AE%B6/chrono',//外国人作家一覧
	  'https://ponomakarera.tumblr.com/tagged/%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9',//不思議の国のアリス
]
	
	var image = [
	  'https://68.media.tumblr.com/a42ff6d3f4ddb6734dec1672db2bb6b1/tumblr_o5xwixDP3z1t0jrzao1_500.png',
	  'https://68.media.tumblr.com/076e815b6c14450bddff046b0333d931/tumblr_ok75pcYIvw1t0jrzao1_500.png',
	  'https://68.media.tumblr.com/4fe733a7b177152812ab6ae418f3cd1d/tumblr_okq4ixlt7E1t0jrzao1_1280.png',
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	$('#adlink').attr("href", linkurl[rand]);
	$('#ad').attr("src", image[rand]);
	
});
