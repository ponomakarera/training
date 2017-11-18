(function () {

	//link
	var linkurl = [
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	  'https://ponomakarera.tumblr.com/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%BD%9C%E5%AE%B6/chrono',//外国人作家一覧
	  'https://ponomakarera.tumblr.com/tagged/%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9',//不思議の国のアリス
	  'https://ponomakarera.tumblr.com/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%94%BB%E5%AE%B6/chrono/',//外国人画家一覧
	  'https://ponomakarera.tumblr.com/tagged/%E4%B8%A6%E5%B9%B3%E7%94%BA',//並平町
	  'https://ponomakarera.tumblr.com/post/158195813595/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%8F%E6%99%82%E3%81%AB%E4%BD%BF%E3%81%88%E3%81%9D%E3%81%86%E3%81%AA%E7%B5%B5%E9%9B%86',//イラストを描く時に使えそうな絵集
	  'https://ponomakarera.tumblr.com/post/162845814275/emigration-v-6-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB',//Emigration (v 6) 日本語化ファイル
	  'https://ponomakarera.tumblr.com/post/164489780410/racial-tension',//Racial Tension
	]
	
	//image
	var image = [
	  'https://68.media.tumblr.com/a42ff6d3f4ddb6734dec1672db2bb6b1/tumblr_o5xwixDP3z1t0jrzao1_500.png',//妄想都市
	  'https://68.media.tumblr.com/076e815b6c14450bddff046b0333d931/tumblr_ok75pcYIvw1t0jrzao1_500.png',//外国人作家一覧
	  'https://68.media.tumblr.com/b6acbb548c0408735908365cd6996e55/tumblr_okq4ixlt7E1t0jrzao1_500.png',//不思議の国のアリス
	  'https://68.media.tumblr.com/3e6ebcfd023e2d8ed70ffe2e5d4d22d4/tumblr_okq9goxYnh1t0jrzao1_500.png',//外国人画家一覧
	  'https://68.media.tumblr.com/66b3a66a8fef1852876374dda88782dc/tumblr_okqa838NzS1t0jrzao1_500.png',//並平町
	  'https://68.media.tumblr.com/ba3302963319ce12c1cf38c1ab7e08f3/tumblr_omk4u3dcai1t0jrzao1_500.jpg',//イラストを描く時に使えそうな絵集
	  'https://68.media.tumblr.com/3b09d5d60759a1a99f07e707062153a0/tumblr_oswngsTrQ31t0jrzao1_500.jpg',//Emigration (v 6) 日本語化ファイル
	  'https://68.media.tumblr.com/23f37f2c67cca46b85af4d655c2e0855/tumblr_ov3kodR2ir1t0jrzao1_500.png',//Racial Tension
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	//device check
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		//smartphone
		document.getElementById("adlink").href = linkurl[rand];
		document.getElementById("adlink").innerHTML="<img id='ad' src='"+ image[rand] +"' align='right'>";
	} 
	else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		//tablet
		document.getElementById("adlink").href = linkurl[rand];
		document.getElementById("adlink").innerHTML="<img id='ad' src='"+ image[rand] +"'>";
	}
	else {
		//pc
		document.getElementById("adlink").href = linkurl[rand];
		document.getElementById("adlink").innerHTML="<img id='ad' src='"+ image[rand] +"'>";
	}
})();
