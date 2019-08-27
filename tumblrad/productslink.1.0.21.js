(function () {

	//link
	var linkurl = [
	  'https://ponomakarera.social/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	  'https://ponomakarera.social/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E4%BD%9C%E5%AE%B6/chrono',//外国人作家一覧
	  'https://ponomakarera.social/post/168677703740/%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9',//不思議の国のアリス
	  'https://ponomakarera.social/tagged/%E5%A4%96%E5%9B%BD%E4%BA%BA%E7%94%BB%E5%AE%B6/chrono/',//外国人画家一覧
	  'https://ponomakarera.social/tagged/%E4%B8%A6%E5%B9%B3%E7%94%BA',//並平町
	  'https://ponomakarera.social/post/158195813595/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%8F%E6%99%82%E3%81%AB%E4%BD%BF%E3%81%88%E3%81%9D%E3%81%86%E3%81%AA%E7%B5%B5%E9%9B%86',//イラストを描く時に使えそうな絵集
	  'https://ponomakarera.social/post/162845814275/emigration-v-6-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB',//Emigration (v 6) 日本語化ファイル
	  'https://ponomakarera.social/post/164489780410/racial-tension',//Racial Tension
	  'https://ponomakarera.social/post/173674210890/%E3%82%A4%E3%83%A9%E3%82%A4%E3%83%A9%E3%81%97%E3%81%9F%E6%99%82%E3%81%AB%E8%81%B4%E3%81%8F%E3%82%AF%E3%83%A9%E3%82%B7%E3%83%83%E3%82%AF%E9%9F%B3%E6%A5%BD',//イライラした時に聴くクラシック音楽
	  'https://ponomakarera.social/post/174117448910/fuck-unhappiness-v-1',//Fuck Unhappiness (v 1)
	  'https://ponomakarera.social/post/174772644300/vox-populicommunity-patch-domestic-competition',//Vox Populi(Community Patch) – Domestic Competition
	  'https://ponomakarera.social/post/175943826205/tumblr%E3%83%86%E3%83%BC%E3%83%9E-categories',//Tumblrテーマ – Categories
          'https://ponomakarera.social/post/176382764625/tumblr%E3%83%86%E3%83%BC%E3%83%9E-photography',//Tumblrテーマ – Photography
          'https://ponomakarera.social/post/176949685825/tumblr%E3%83%86%E3%83%BC%E3%83%9E-photography-2',//Tumblrテーマ – Photography 2
	  'https://ponomakarera.social/post/178062686225/tumblr%E3%83%86%E3%83%BC%E3%83%9E-linkit',//Tumblrテーマ – Linkit
	  'https://ponomakarera.social/post/178538050475/wars-for-science-v-1',//Wars for Science (v 1)
	  'https://ponomakarera.social/post/185454093865/glory-of-a-city-v-1',//Glory of a City (v 1)
	]
	
	//image
	var image = [
	  'https://66.media.tumblr.com/8d990cd69d9615d8234e9f7ffd5eed77/tumblr_pww4ii5yk01t0jrzao1_500.png',//妄想都市
	  'https://68.media.tumblr.com/076e815b6c14450bddff046b0333d931/tumblr_ok75pcYIvw1t0jrzao1_500.png',//外国人作家一覧
	  'https://78.media.tumblr.com/51a3743e3d1e1e05241a1dd9f9dd6483/tumblr_p15qk9RN261t0jrzao1_500.png',//不思議の国のアリス
	  'https://68.media.tumblr.com/3e6ebcfd023e2d8ed70ffe2e5d4d22d4/tumblr_okq9goxYnh1t0jrzao1_500.png',//外国人画家一覧
	  'https://68.media.tumblr.com/66b3a66a8fef1852876374dda88782dc/tumblr_okqa838NzS1t0jrzao1_500.png',//並平町
	  'https://68.media.tumblr.com/ba3302963319ce12c1cf38c1ab7e08f3/tumblr_omk4u3dcai1t0jrzao1_500.jpg',//イラストを描く時に使えそうな絵集
	  'https://68.media.tumblr.com/3b09d5d60759a1a99f07e707062153a0/tumblr_oswngsTrQ31t0jrzao1_500.jpg',//Emigration (v 6) 日本語化ファイル
	  'https://68.media.tumblr.com/23f37f2c67cca46b85af4d655c2e0855/tumblr_ov3kodR2ir1t0jrzao1_500.png',//Racial Tension
	  'https://78.media.tumblr.com/a91065d8f0c8fcdea2316ebe80b2fb30/tumblr_p8d9b8VVEx1t0jrzao1_400.png',//イライラした時に聴くクラシック音楽
	  'https://78.media.tumblr.com/3459cb95ef0667a90da90e1902dc2a26/tumblr_p937cdB67H1t0jrzao1_500.png',//Fuck Unhappiness (v 1)
	  'https://78.media.tumblr.com/fb2611ebc8920104ce7ef30899722eb7/tumblr_pa4xafvPuR1t0jrzao1_400.png',//Vox Populi(Community Patch) – Domestic Competition
	  'https://78.media.tumblr.com/74db9cf69429962b35727f91644eb9c1/tumblr_pbytwycMwJ1t0jrzao1_1280.png',//Tumblrテーマ – Categories
          'https://78.media.tumblr.com/9bff0bdd441ce6ffbce7812f10b94391/tumblr_pclfjrBP0H1t0jrzao1_1280.jpg',//Tumblrテーマ – Photography
	  'https://78.media.tumblr.com/c8f53e248fa3e1380aee2e2200c9f0e9/tumblr_pdeh7reJL81t0jrzao1_1280.png',//Tumblrテーマ – Photography 2
	  'https://78.media.tumblr.com/af83c5b752adaa1f05e9eaeccadfa8bb/tumblr_pf0yfa9TLO1t0jrzao1_1280.png',//Tumblrテーマ – Linkit
	  'https://66.media.tumblr.com/f18b6fe85f94b210a9f37f8fccecf32c/tumblr_pfrgygXpUT1t0jrzao1_r1_1280.jpg',//Wars for Science (v 1)
	  'https://66.media.tumblr.com/46b469f0646e0f3ddabfb218e4970d13/tumblr_pssi8eJiEl1t0jrzao1_1280.jpg',//Glory of a City (v 1)
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	//device check
	var ua = navigator.userAgent;
	if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
		//smartphone
		document.getElementById("productslink").href = linkurl[rand];
		document.getElementById("productslink").innerHTML="<img id='ad' src='"+ image[rand] +"' align='right'>";
	} 
	else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
		//tablet
		document.getElementById("productslink").href = linkurl[rand];
		document.getElementById("productslink").innerHTML="<img id='ad' src='"+ image[rand] +"'>";
	}
	else {
		//pc
		document.getElementById("productslink").href = linkurl[rand];
		document.getElementById("productslink").innerHTML="<img id='ad' src='"+ image[rand] +"'>";
	}
})();
