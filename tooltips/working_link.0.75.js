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
				$("#workinglist").append("<span style='font-size: 14px; font-weight: bold;'>作っているもの</span><br>");
				for (var i = 0; i < working.length; i++) {
					if (!(i == working.length - 1)) {$("#workinglist").append("<div style='line-height:16px;'><a href='https://ponomakarera.tumblr.com/tagged/"+ datework[date[i]] +"' style='color:#00830c; text-decoration: none;'>"+ datework[date[i]] +"</a><br><span style='color:#666; font-size: 12px;'>投稿数（"+ dateposts[date[i]] +"） "+ gmttojst(date[i]) +"</span><br><br></div>");}
					else {$("#workinglist").append("<div style='line-height:16px;'><a href='https://ponomakarera.tumblr.com/tagged/"+ datework[date[i]] +"' style='color:#00830c; text-decoration: none;'>"+ datework[date[i]] +"</a><br><span style='color:#666; font-size: 12px;'>投稿数（"+ dateposts[date[i]] +"） "+ gmttojst(date[i]) +"</span><br></div>");}
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
		if (date.match(/.+-(.+)-(.+) .+:/)) {
			if (Number(RegExp.$1) < 10) {
				date = date.replace(new RegExp("-"+ RegExp.$1 +"-"),"-"+ Number(RegExp.$1) +"-");
			}
			if (Number(RegExp.$2) < 10) {
				date = date.replace(new RegExp("-"+ RegExp.$2 +" "),"-"+ Number(RegExp.$2) +" ");
			}
			return date.replace(new RegExp('(.+)-(.+)-(.+) .+:.+:.+ GMT'),'$1年$2月$3日');
		}
	}	
	
	function hourcheck(hour) {
		if (hour + 9 > 23) {
			return true;
		}
		else {
			return false;
		}
	}
	
	function daycheck(hourcheck, month, day) {
		
		var under31days = {'2':true, '4':true, '6':true, '9':true, '11':true};
		
		if (hourcheck) {
			day += 1;
		}
		if (day > 31) {
			return true;
		}
		if (under31days[String(month)] && day > 30 ) {
			return true;
		}
		if (month == 2 && day > 28) {
			return true;
		}
		return false;
	}
	
	function monthcheck(daycheck, month) {
		if (daycheck) {
			month += 1;
		}
		if (month > 12) {
			return true;
		}
		return false;
	}
	
	
	/* GMT to JST */
	function gmttojst(date) {
		var year;
		var month;
		var day;
		var hour;
		if (date.match(/(\d{4})-(\d{2})-(\d{2}) (\d{2}):/)) {
			
			year = Number(RegExp.$1);
			month = Number(RegExp.$2);
			day = Number(RegExp.$3);
			hour = Number(RegExp.$4);
			
			if (monthcheck(daycheck(hourcheck(hour), month, day), month)) {
				year += 1;
			}
			if (daycheck(hourcheck(hour), month, day)) {
				if (monthcheck(daycheck(hourcheck(hour), month, day), month)) {
					month = 1;
				}
				else {
					month += 1;
				}
			}
			if (hourcheck(hour)) {
				if (daycheck(hourcheck(hour), month, day)) {
					day = 1;
				}
				else {
					day += 1;
				}
			}
		}
		return date.replace(new RegExp("(.+)-(.+)-(.+) .+:.+:.+ GMT"),""+ year +"年"+ month +"月"+ day +"日");
		
	}
	
});
