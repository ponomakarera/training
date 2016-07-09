$(function () {
	$(".post").each(function(){
			var txt = $(this).html();
			$(this).html(txt.replace(new RegExp(/>>(\d+)/, "g"),"<a href='https://tagmani.tumblr.com/post/"+ RegExp.$1 +"'>&gt;&gt;"+ RegExp.$1 +"</a>"));
			console.log("$1 = "+ RegExp.$1)
			
	});

});
