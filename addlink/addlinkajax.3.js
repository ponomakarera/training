$(function () {
	var array = new Array();
	var listnumber = 0;
	var body = {};
	var url = {};
	
	$.ajax({
        url: 'https://ponomakarera.tumblr.com/post/161305341820/test',
        type: 'GET',
        dataType: 'html',
    })
    .done(function(data) {
        $(data).find('memo').each(function(){
			array[listnumber++] = $(this).find('title').html();
			body[array[listnumber - 1]] = $(this).find('naiyou').html();
			url[array[listnumber - 1]] = $(this).find('memourl').html();
        });
		array.sort();
		array.sort(function(a, b) {return b.length - a.length;});
		console.log(data);
		
		$(".addlink").each(function(){
			var txt = $(this).html();
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
				if (($(this).hasClass(array[i]))) {
					txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
				}
				else {
					if (txt.match("<span id=."+ i +".></span>")) {
						txt = txt.replace(new RegExp("<span id=."+ i +".></span>"),"<a  class='textlink' id='textlink"+ addlinkcount +"'; href='"+url[array[i]]+"' style='color:#0645ad '>"+array[i]+"</a>");
						txt = txt.replace(new RegExp("<span id=."+ i +".></span>", "g"),array[i]);
						$("body").append("<div class='tooltip' id='tooltip"+addlinkcount+"'><p>"+body[array[i]]+"</p></div>");
						addlinkcount++;
					}
				}
			}
			$(this).html(txt);
		});
						
		$(document).ready(function(){
			simple_tooltip("textlink","tooltip");
		});
    })
    .fail(function( data ) {
        console.log("error");
    });
});
