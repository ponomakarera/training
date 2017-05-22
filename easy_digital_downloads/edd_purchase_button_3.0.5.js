$(function () {

	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
		var modal = document.getElementById('purchaseform');
		var span = document.getElementsByClassName("close")[0];
		
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {
				
				$("#purchaseform").append("<input type='hidden' name='download_id' value='" + download_id + "'>");
				$("#purchaseform").append('<input type="hidden" name="edd_action" value="straight_to_gateway">');
				$("#purchaseform").append("<input type='hidden' name='edd_stripe_token' value='" + token.id + "' />");
				$("#purchaseform").append("<input type='hidden' name='edd_email' value='" + token.email + "' />");
				$("body").append("<iframe id="checkoutform" name='targetframe'><span class="close">&times;</span><iframe>");
				document.targetform.submit();
				document.targetform.empty();
				
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
	
	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		$("#checkoutform").remove();
	}
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			$("#checkoutform").remove();
		}
	}
});
