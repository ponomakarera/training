$(function () {

	var redilink = 't.umblr.com/redirect?z=';
    $("a").each(function() {
	
		//get the original URL
		var theURL = $(this).attr('href');
		
		if (theURL.match(new RegExp(redilink))) {
		
			//split at the equals sign
			var one = theURL.split('=');
		
			//split again at the amperstand
			var two = one[1].split('&');
		
			//get rif of the URL encoding
			var decodedURL = decodeURIComponent(two[0]);
		
			//put decoded URL in the href attribute
			$(this).attr('href', decodedURL);
			
		}
    
	});
});
