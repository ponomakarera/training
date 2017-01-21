$(function () {

	var href = window.location.href ;
	var shoppingtag = "https://ponomakarera.tumblr.com/tagged/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0";//ショッピングタグ
	
	var purchaseurl = [
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	]
	
	
	
	if (shoppingtag.match(new RegExp("^"+ href +"$"))) {
		document.getElementById("purchaseprocess").innerHTML="商品の購入を希望される方はこちら→『<a href='https://ponomakarera.tumblr.com/post/156176167955/spike%E6%B1%BA%E6%B8%88%E3%81%AE%E6%B5%81%E3%82%8C'><font color='#333333'>SPIKE決済の流れ</font></a>』";
	}
	else {
		for (var i = 0; i < purchaseurl.length; i++) {
			var key = purchaseurl[i];
		
			if (key.match(new RegExp("^"+ href +"$"))) {

				document.getElementById("purchaseprocess").innerHTML="<br>商品の購入を希望される方はこちら→『<a href='https://ponomakarera.tumblr.com/post/156176167955/spike%E6%B1%BA%E6%B8%88%E3%81%AE%E6%B5%81%E3%82%8C'><font color='#333333'>SPIKE決済の流れ</font></a>』";
			}
		}
	}

});
