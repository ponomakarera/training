$(function () {

	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
		
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {
				
				ajaxtest(download_id, stripe_id, email);
				
				/*$("#purchase_form").append("<input type='hidden' name='download_id' value='" + download_id + "'>");
				$("#purchase_form").append('<input type="hidden" name="edd_action" value="straight_to_gateway">');
				$("#purchase_form").append("<input type='hidden' name='edd_stripe_token' value='" + token.id + "' />");
				$("#purchase_form").append("<input type='hidden' name='edd_email' value='" + token.email + "' />");
				$("#purchase_form").submit();
				$("#purchase_form").empty();*/

			},
			opened: function() {

			},
			closed: function() {

			}
		}).open({
			name: product_title,
			amount: amount,
			allowRememberMe: false,
			currency: 'JPY'
		});
			
		return false;
		
	});
	
	function ajaxtest(download_id, stripe_id, email) {
		$("#ajaxtest").append("<span>download_id is <b>"+ download_id +"</b></span><br>");
		$("#ajaxtest").append("<span>stripe_id is <b>"+ stripe_id +"</b></span><br>");
		$("#ajaxtest").append("<span>email is <b>"+ email +"</b></span><br>");
	}
	
});
