(function () {
	
	//post title and post id that with memo tag.
	var dic = {
	
	'あ': '149175896520', 'とは': '148474924130', 'aiueo': '161354348280', 'aiu': '161354358415', 'むむむむむむむむむむ': '161373049715',
	
	};
	
	var target = document.getElementsByClassName('addlink');
	
	for (var i = 0; i < target.length; i++){
		var txt = target[i].innerHTML;
		var contents = [];
		while (txt.match(/<linkcancel>(?!<\/linkcancel>)[\s\S]+?<\/linkcancel>/)) {
			txt = txt.replace(new RegExp(/<linkcancel>(?!<\/linkcancel>)([\s\S]+?)<\/linkcancel>/),"<linkcancel></linkcancel>");
			contents.push(RegExp.$1);
		}
		Object.keys(dic).sort(function(a, b) {return b.length - a.length;}).forEach(function(key) {
			txt = txt.replace(new RegExp(key, "g"),"<span id='"+ dic[key] +"'></span>");
		});
		for (var j = 0; j < contents.length; j++) {
			txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents[j] +"</linkcancel>");
		}
		for (var key in dic) {
			if ((' '+ target[i].className +' ').indexOf(' '+ key +' ') >= 0) {
				txt = txt.replace(new RegExp("<span id=."+ dic[key] +".></span>", "g"),key);
			}
			else {
				if (txt.match("<span id=."+ dic[key] +".></span>")) {
					txt = txt.replace(new RegExp("<span id=."+ dic[key] +".></span>"),"<a  class='textlink' href='https://ponomakarera.tumblr.com/post/"+ dic[key] +"/"+ key +"' style='color:#0645ad' id='"+ dic[key] +"'>"+ key +"</a>");
					txt = txt.replace(new RegExp("<span id=."+ dic[key] +".></span>", "g"),key);
				}
			}
		}
		target[i].innerHTML = txt;
	}
	
	//device check
	$(function () {
		var ua = navigator.userAgent;
		if (ua.indexOf('iPhone') > 0 || ua.indexOf('iPod') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
			//smartphone
		} 
		else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
			//tablet
		}
		else {
			//pc
			simple_tooltip("textlink","tooltip");
		}
	});
})();
