$(function () {
	
	var working = [
	
	'不思議の国のアリス', '並平町'
	
	];

	var date = new Array(working.length);
	var datework = {};
	var i
	var j
	var listnumber = 0;
	$.ajaxSetup({async: false});
	
	for (i = 0; i < working.length; i++) {
	
		$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag="+ working[i] +"&limit=1&jsonp=?", function (data) {
			console.log("i = "+ i);
			date[listnumber] = data.response.posts[0].date;
			datework[data.response.posts[0].date] = working[listnumber++];
			
			if (listnumber == working.length) {
				if (working.length > 1) {date.sort(comparedate); console.log(date);}
				
				$("#workinglistset").append("<div id='workinglist'></div>");
				for (j = 0; j < working.length; j++) {
					$("#workinglist").append("<a href='https://ponomakarera.tumblr.com/tagged/"+ datework[date[j]] +"' style='color:#00830c; text-decoration: none;'>"+ datework[date[j]] +"</a><br><span style='color:#666; font-size: 12px;'>"+ date[j].replace(new RegExp(' GMT'),'') +"</span><br><br>");
				}
			}
			
		});
	
	}
	
	function comparedate (a, b) {
		console.log("hit");
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
		if (amonth > bmonth) {console.log("amonth : "+ amonth +" bmonth : "+ bmonth); return -1;}
		if (amonth < bmonth) {console.log("amonth : "+ amonth +" bmonth : "+ bmonth); return 1;}
		if (aday > bday) {return -1;}
		if (aday < bday) {return 1;}
		if (ahour > bhour) {return -1;}
		if (ahour < bhour) {return 1;}
		if (aminute > bminute) {return -1;}
		if (aminute < bminute) {return 1;}
		if (asecond > bsecond) {return -1;}
		if (asecond < bsecond) {return 1;}
		
	}
});
