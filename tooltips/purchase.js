$(function () {

	var purchaseurl = [
		'https://ponomakarera.tumblr.com/tagged/%E3%82%B7%E3%83%A7%E3%83%83%E3%83%94%E3%83%B3%E3%82%B0',//ショッピングタグ
	  'https://ponomakarera.tumblr.com/post/156130120710/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	]
	
	
	var href = window.location.href ;
	
	for (var key in purchaseurl) {
		if (key.match(new RegExp(href))) {
			document.getElementById("purchaseprocess").innerHTML="test";
		}
	}
		
});
