(function () {
	
	var array = {
	
	'あ': '149175896520', 'とは': '148474924130',
	
	};
	
	var target = document.getElementsByClassName('addlink');
	
	for (var i = 0; i < target.length; i++){
		var txt = target[i].innerHTML;
		var contents = [];
		while (txt.match(/<linkcancel>(?!<\/linkcancel>)[\s\S]+?<\/linkcancel>/)) {
			txt = txt.replace(new RegExp(/<linkcancel>(?!<\/linkcancel>)([\s\S]+?)<\/linkcancel>/),"<linkcancel></linkcancel>");
			contents.push(RegExp.$1);
		}
		for (var key in array) {
			txt = txt.replace(new RegExp(key, "g"),"<span id='"+ array[key] +"'></span>");
		}
		for (var j = 0; j < contents.length; j++) {
			txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents[j] +"</linkcancel>");
		}
		for (var key in array) {
			if ((target[i].className +'').indexOf(key) >= 0) {
				txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>", "g"),key);
			}
			else {
				if (txt.match("<span id=."+ array[key] +".></span>")) {
					txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>"),"<a  class='textlink' href='https://ponomakarera.tumblr.com/post/"+ array[key] +"/"+ key +"' style='color:#0645ad' post_id='"+ array[key] +"'>"+ key +"</a>");
					txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>", "g"),key);
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
			simple_tooltip("textlink","tooltip");
		}
		else {
			//pc
			simple_tooltip("textlink","tooltip");
		}
	});
})();
