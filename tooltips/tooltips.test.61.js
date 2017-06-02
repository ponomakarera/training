function simple_tooltip(target, reference){

	var my_tooltip;
	var matched_word = {};
	
	$("."+target).mouseover(function() {
		
		var i = $(this).attr('id');
		var test = document.getElementById(i)
		
		if(!matched_word[i]) {
			console.time('timer1');
			$.getJSON("https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&id="+ i +"&jsonp=?", function (data) {
				$("body").append("<div class='tooltip' id='"+ reference+ i +"'><p>"+ data.response.posts[0].body +"</p></div>"); 
				matched_word[i] = true;
				console.timeEnd('timer1');
			});
		}

		test.addEventListener("mouseover", function() {
			alert("hit");
		}
		
	});
}
