$(function () {
	
	var working = [
	
	'不思議の国のアリス', '並平町'
	
	];
	
	var date = new Array(working.length);
	var datework = {};
	
	for (var i = 0; i < working.length; i++) {
	
		$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag="+ working[i] +"&limit=1&jsonp=?", function (data) {
			date[i] = data.response.posts[0].date;
			datework[data.response.posts[0].date] = working[i];
		});
	
	}
	
	if (working.length > 1) {date.sort(comparedate);}
	
	for (var i in date) {
		$("body").append("<a href='https://ponomakarera.tumblr.com/tagged/"+ datework[date[i]] +"' style='color:#00830c; text-decoration: none;'>"+ datework[date[i]] +"</a><br><span style="color:#666; font-size: 12px;">"+ date[i].replace(new RegExp(" GMT"),"") +"</span><br><br>");
	}
	
	
	function comparedate (a, b) {
		
		var ayear
		var amonth
		var aday
		var ahour
		var aminute
		var asecond
		if (a.match(/(.+)-(.+)-(.+) (.+):(.+):(.+)/)) {
			ayer = RegExp.$1;
			amonth = RegExp.$2;
			aday = RegExp.$3;
			ahour = RegExp.$4;
			aminute = RegExp.$5;
			asecond = RegExp.$6;
		}
		
		var byear
		var bmonth
		var bday
		var bhour
		var bminute
		var bsecond
		if (b.match(/(.+)-(.+)-(.+) (.+):(.+):(.+)/)) {
			byer = RegExp.$1;
			bmonth = RegExp.$2;
			bday = RegExp.$3;
			bhour = RegExp.$4;
			bminute = RegExp.$5;
			bsecond = RegExp.$6;
		}
		
		if (ayer < byear) {return 1;}
		if (amonth < bmonth) {return 1;}
		if (aday < bday) {return 1;}
		if (ahour < bhour) {return 1;}
		if (aminute < bminute) {return 1;}
		if (asecond < bsecond) {return 1;}
		
	}
});
