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
	]
	
	//image
	var image = [
	  'https://78.media.tumblr.com/f6b8c179b61e270738058ca468c3c5eb/tumblr_peb7r1HpJG1xeooa7o1_400.jpg',//妄想都市
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	var adspace = document.getElementsByClassName("antenna")
	
	if (adspace.length == 1) {
			console.log("adspace.length = 1");
		adspace[0].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';
	} 
	else {
		console.log("adspace.length = 2");
		for (i = 0; i < adspace.length; i++) {
			adspace[i].innerHTML = '<a href="'+ linkurl[rand] +'" class="logo" target="_blank"><div class="slide-img" style="background-image: url(&quot;'+ image[rand] +'&quot;);"></div></a>';
		}
	}

})();
