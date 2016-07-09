$(function () {
	$(".post").each(function(){
			var txt = $(this).html();
			$(this).html(txt.replace(new RegExp(/&gt;&gt;(\d+)/, "g"),"<a href='https://tagmani.tumblr.com/post/$1'>&gt;&gt;$1</a>"));
	});
});
