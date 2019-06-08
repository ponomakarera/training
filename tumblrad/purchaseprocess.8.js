(function () {

	var href = window.location.href ;
	var shoppingtag = "https://ponomakarera.social/tagged/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0";//ショッピングタグ
	
	var purchaseurl = [
	  'https://ponomakarera.social/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
          'https://ponomakarera.social/post/158195813595/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%8F%E6%99%82%E3%81%AB%E4%BD%BF%E3%81%88%E3%81%9D%E3%81%86%E3%81%AA%E7%B5%B5%E9%9B%86',//イラストを描く時に使えそうな絵集
	  'https://ponomakarera.social/post/162845814275/emigration-v-6-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB',//Emigration (v 6) 日本語化ファイル
	  'https://ponomakarera.social/post/164489780410/racial-tension',//Racial Tension
	  'https://ponomakarera.social/post/168677703740/%E4%B8%8D%E6%80%9D%E8%AD%B0%E3%81%AE%E5%9B%BD%E3%81%AE%E3%82%A2%E3%83%AA%E3%82%B9',//不思議の国のアリス
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
	
	if (shoppingtag.match(new RegExp("^"+ href +"$"))) {
	    document.getElementById("purchaseprocess").innerHTML="商品の購入を希望される方はこちら→『<a href='https://ponomakarera.social/post/160982036505/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AE%E6%B5%81%E3%82%8C' style='color:#333333;'>ショッピングの流れ</a>』";
	}
	else {
		for (var i = 0; i < purchaseurl.length; i++) {
			if (purchaseurl[i].match(new RegExp("^"+ href +"$"))) {
			    document.getElementById("purchaseprocess").innerHTML="<br>商品の購入を希望される方はこちら→『<a href='https://ponomakarera.social/post/160982036505/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AE%E6%B5%81%E3%82%8C' style='color:#333333;'>ショッピングの流れ</a>』";
			
			}
		}
	}

})();
