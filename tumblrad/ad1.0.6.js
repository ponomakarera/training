$(function () {

	var linkurl = [
	  'http://ponomakarera.tumblr.com/post/137832799790/%E8%80%83%E3%81%88%E3%82%8B%E4%BA%BA',
	  'http://ponomakarera.tumblr.com/tagged/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',
	]
	
	var image = [
	  'http://66.media.tumblr.com/42f38fe0fe8fa10ea8c7f58a5ffcfed5/tumblr_o1dguw5jpD1t0jrzao1_500.png',
	  'http://67.media.tumblr.com/a42ff6d3f4ddb6734dec1672db2bb6b1/tumblr_o5xwixDP3z1t0jrzao1_500.png',
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	$('#adlink').attr("href", linkurl[rand]);
	$('#ad').attr("src", image[rand]);
	
});
