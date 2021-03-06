$(function () {

	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
		
		StripeCheckout.configure({
			key: 'pk_live_kPmUwOK0Hu0lRGtEnip8eX7C',
			locale: 'auto',
			token: function(token) {
				
				$("#purchase_form").append("<input type='hidden' name='download_id' value='" + download_id + "'>");
				$("#purchase_form").append('<input type="hidden" name="edd_action" value="straight_to_gateway">');
				$("#purchase_form").append("<input type='hidden' name='edd_stripe_token' value='" + token.id + "' />");
				$("#purchase_form").append("<input type='hidden' name='edd_email' value='" + token.email + "' />");
				$("#purchase_form").submit();
				$("#purchase_form").empty();

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
});
