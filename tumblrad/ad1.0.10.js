$(function () {

	var linkurl = [
	  'https://ponomakarera.tumblr.com/post/137832799790/%E8%80%83%E3%81%88%E3%82%8B%E4%BA%BA',//考える人
	  'https://ponomakarera.tumblr.com/tagged/%E5%A6%84%E6%83%B3%E9%83%BD%E5%B8%82',//妄想都市
	]
	
	var image = [
	  'https://68.media.tumblr.com/ff999e638de6b4d4258970024bf50b1a/tumblr_o5hc04sjOB1t0jrzao1_500.png',
	  'https://68.media.tumblr.com/a42ff6d3f4ddb6734dec1672db2bb6b1/tumblr_o5xwixDP3z1t0jrzao1_500.png',
	]
	
	var rand = Math.floor( Math.random() * linkurl.length );
	
	$('#adlink').attr("href", linkurl[rand]);
	$('#ad').attr("src", image[rand]);
	
});
