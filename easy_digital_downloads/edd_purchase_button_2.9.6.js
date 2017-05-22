$(function () {

	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
		
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {
				
				$("#checkout_form").append("<input type='hidden' name='download_id' value='" + download_id + "'>");
				$("#checkout_form").append('<input type="hidden" name="edd_action" value="straight_to_gateway">');
				$("#checkout_form").append("<input type='hidden' name='edd_stripe_token' value='" + token.id + "' />");
				$("#checkout_form").append("<input type='hidden' name='edd_email' value='" + token.email + "' />");
				
				$("#modal-iframe").iziModal({
					iframe: true,
					iframeHeight: 800,
					iframeURL: "https://ponomakarera.com/checkout/purchase-confirmation/"
				});
				$('#modal').iziModal('open');
				//document.targetform.submit();
				/*$("#checkout_form").submit();*/


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
