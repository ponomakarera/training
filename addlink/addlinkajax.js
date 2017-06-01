$(function () {

	var URL = 'https://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/post';
	var consumer_key = '1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V';
	var consumer_secret = '8gTIVJGRIyeZfq3gWFX0XfFnSUl2LhTJ8uXDpWxhM93UuCZ8LM';
	var token = 'nhAqTWu69xZalaQLzbOj835b1G97n5jzlf6CNjq98dj1s6ZKb7';
	var token_secret = 'EgDsAKfUlH6aPm6M66zAhxILC1JPURyMNVX05BEiCj2Du5FRC4';
	
	$.ajax({
        url: URL,
        type:'POST',
        dataType: 'json',
        data : {consumer_key : consumer_key, consumer_secret : consumer_secret, token : token, token_secret : token_secret, body : 'test'},
        success: function(data) {
            alert(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
			alert("error");
        }
    });
	
});
