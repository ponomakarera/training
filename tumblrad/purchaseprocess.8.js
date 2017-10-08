(function () {

	var href = window.location.href ;
	var shoppingtag = "https://ponomakarera.tumblr.com/tagged/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0";//ショッピングタグ
	
	var purchaseurl = [
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
          'https://ponomakarera.tumblr.com/post/158195813595/%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88%E3%82%92%E6%8F%8F%E3%81%8F%E6%99%82%E3%81%AB%E4%BD%BF%E3%81%88%E3%81%9D%E3%81%86%E3%81%AA%E7%B5%B5%E9%9B%86',//イラストを描く時に使えそうな絵集
	  'https://ponomakarera.tumblr.com/post/162845814275/emigration-v-6-%E6%97%A5%E6%9C%AC%E8%AA%9E%E5%8C%96%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB',//Emigration (v 6) 日本語化ファイル
	  'https://ponomakarera.tumblr.com/post/164489780410/racial-tension',//Racial Tension
	]
	
	if (shoppingtag.match(new RegExp("^"+ href +"$"))) {
	    document.getElementById("purchaseprocess").innerHTML="商品の購入を希望される方はこちら→『<a href='https://ponomakarera.tumblr.com/post/160982036505/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AE%E6%B5%81%E3%82%8C' style="color:#333333;">ショッピングの流れ</a>』";
	}
	else {
		for (var i = 0; i < purchaseurl.length; i++) {
			if (purchaseurl[i].match(new RegExp("^"+ href +"$"))) {
			    document.getElementById("purchaseprocess").innerHTML="<br>商品の購入を希望される方はこちら→『<a href='https://ponomakarera.tumblr.com/post/160982036505/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0%E3%81%AE%E6%B5%81%E3%82%8C' style="color:#333333;">ショッピングの流れ</a>』";
			
			}
		}
	}

})();
