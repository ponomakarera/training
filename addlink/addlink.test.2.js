(function () {
	
	var target = document.getElementsByClassName('addlink');
	var array = {'あ': '149175896520', 'とは': '148474924130'};
	
	for (var i = 0; i < target.length; i++){
		var txt = target[i].innerHTML;
		console.log("before:"+ txt);
		var contents = [];
		while (txt.match(/<linkcancel>(?!<\/linkcancel>)[\s\S]+?<\/linkcancel>/)) {
			txt = txt.replace(new RegExp(/<linkcancel>(?!<\/linkcancel>)([\s\S]+?)<\/linkcancel>/),"<linkcancel></linkcancel>");
			contents.push(RegExp.$1);
		}
		for (var key in array) {
			txt = txt.replace(new RegExp(key, "g"),"<span id='"+ array[key] +"'></span>");
		}
		for (var i = 0; i < contents.length; i++) {
			txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents[i] +"</linkcancel>");
		}
		for (var key in array) {
			if (target[j].classList.containsarray[key]) {
				txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>", "g"),key);
			}
			else {
				if (txt.match("<span id=."+ array[key] +".></span>")) {
					txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>"),"<a  class='textlink' href='https://ponomakarera.tumblr.com/post/"+ array[key] +"' style='color:#0645ad' >"+ key +"</a>");
					txt = txt.replace(new RegExp("<span id=."+ array[key] +".></span>", "g"),key);
					/*if (!tooltip_exist[array[i]]) {$("body").append("<div class='tooltip' id='tooltip"+ i +"'><p>"+ body[array[i]] +"</p></div>"); tooltip_exist[array[i]] = true;}*/
				}
			}
		}
		target[i].innerHTML = txt;
		console.log("after:"+ target[i].innerHTML);
	}
})();
