(function () {
	
	var target = document.getElementsByClassName('addlink');
	var array = {'あ': '149175896520', 'とは': '148474924130'};
	
	for (var j = 0; j < target.length; j++){
		var txt = target[j].innerHTML;
		var contents = [];
		while (txt.match(/<linkcancel>(?!<\/linkcancel>)[\s\S]+?<\/linkcancel>/)) {
			txt = txt.replace(new RegExp(/<linkcancel>(?!<\/linkcancel>)([\s\S]+?)<\/linkcancel>/),"<linkcancel></linkcancel>");
			contents.push(RegExp.$1);
		}
		for (var i = 0; i < array.length; i++) {
			txt = txt.replace(new RegExp(array[i], "g"),"<span id='"+ i +"'></span>");
		}
		for (var i = 0; i < contents.length; i++) {
			txt = txt.replace(new RegExp("<linkcancel></linkcancel>"),"<linkcancel>"+ contents[i] +"</linkcancel>");
		}
		for (var i = 0; i < array.length; i++) {
			if ((target[j].classList.containsarray[i]))) {
				txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
			}
			else {
				if (txt.match("<span id=."+ i +".></span>")) {
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' href='"+url[array[i]]+"' style='color:#0645ad' addlink_number="+ i +">" +array[i] +"</a>");
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
					/*if (!tooltip_exist[array[i]]) {$("body").append("<div class='tooltip' id='tooltip"+ i +"'><p>"+ body[array[i]] +"</p></div>"); tooltip_exist[array[i]] = true;}*/
				}
			}
		}
		target[j].innerHTML = txt;
	}
})();
