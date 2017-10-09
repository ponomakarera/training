$(function () {
	
	var working = [
	
	'不思議の国のアリス', '並平町'
	
	];
	
	var titlesearch = {};
	
	for (var i = 0; i < working.length; i++) {
		titlesearch[working[i]] = true;
	}
	
	var date = new Array(working.length);
	var dateposts = {};
	var datework = {};
	var listnumber = 0;
	
	for (var i = 0; i < working.length; i++) {
	
		$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag="+ working[i] +"&limit=1&jsonp=?", function (data) {
			date[listnumber++] = data.response.posts[0].date;
			dateposts[data.response.posts[0].date] = data.response.total_posts;
						
			for (var i in data.response.posts[0].tags) {
				if (titlesearch[data.response.posts[0].tags[i]]) {
						datework[data.response.posts[0].date] = data.response.posts[0].tags[i];
				}
			}
			
			if (listnumber == working.length) {
				if (working.length > 1) {date.sort(comparedate);}
				
				$("#workinglistset").append("<div id='workinglist'></div>");
				for (var i = 0; i < working.length; i++) {
					$("#workinglist").append("<a href='https://ponomakarera.tumblr.com/tagged/"+ datework[date[i]] +"' style='color:#00830c; text-decoration: none;'>"+ datework[date[i]] +"</a><br><span style='color:#666; font-size: 12px;'>投稿数（"+ dateposts[date[i]] +"） "+ jpndate(date[i]) +"</span><br><br>");
				}
			}
			
		});
	
	}
	
	function comparedate (a, b) {
		var ayear
		var amonth
		var aday
		var ahour
		var aminute
		var asecond
		if (a.match(/(.+)-(.+)-(.+) (.+):(.+):(.+)/)) {
			ayear = Number(RegExp.$1);
			amonth = Number(RegExp.$2);
			aday = Number(RegExp.$3);
			ahour = Number(RegExp.$4);
			aminute = Number(RegExp.$5);
			asecond = Number(RegExp.$6);
		}
		
		var byear
		var bmonth
		var bday
		var bhour
		var bminute
		var bsecond
		if (b.match(/(.+)-(.+)-(.+) (.+):(.+):(.+)/)) {
			byear = Number(RegExp.$1);
			bmonth = Number(RegExp.$2);
			bday = Number(RegExp.$3);
			bhour = Number(RegExp.$4);
			bminute = Number(RegExp.$5);
			bsecond = Number(RegExp.$6);
		}

		if (ayear > byear) {return -1;}
		if (ayear < byear) {return 1;}
		if (amonth > bmonth) {return -1;}
		if (amonth < bmonth) {return 1;}
		if (aday > bday) {return -1;}
		if (aday < bday) {return 1;}
		if (ahour > bhour) {return -1;}
		if (ahour < bhour) {return 1;}
		if (aminute > bminute) {return -1;}
		if (aminute < bminute) {return 1;}
		if (asecond > bsecond) {return -1;}
		if (asecond < bsecond) {return 1;}
		
	}
	
	function jpndate(date) {
		if (date.match(/\d{4}-(\d{2})-(\d{2})/)) {
			if (Number(RegExp.$1) < 10) {
				date = date.replace(new RegExp("-$1-"),"-"+ Number(RegExp.$1) +"-");
				console.log(date);
			}
			if (Number(RegExp.$2) < 10) {
				date = date.replace(new RegExp("-$2 "),"-"+ Number(RegExp.$2) +" ");
			}
			return date.replace(new RegExp('(.+)-(.+)-(.+) .+:.+:.+ GMT'),'$1年$2月$3日');
		}
	}	
	
	/* GMT to JST */
	function gmttojst(date) {
		var hour;
		if (date.match(/ (\d{2}):/)) {
			if (Number(RegExp.$1) + 9 > 23) {
				hour = Number(RegExp.$1) + 9 - 24;
			}
			else {
				hour = Number(RegExp.$1) + 9;
			}
			if (hour < 10) {
				return date.replace(new RegExp(" "+ RegExp.$1 +":")," 0"+ hour +":");
			}
			else {
				return date.replace(new RegExp(" "+ RegExp.$1 +":")," "+ hour +":");
			}
		}
	}
});
