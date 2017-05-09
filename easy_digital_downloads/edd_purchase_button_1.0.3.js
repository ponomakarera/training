$(function () {

	$('.edd_button').click(function(e) {
			
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = $(this).attr('price');
			
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			//image: '/square-image.png',
			token: function(token) {

			},
			opened: function() {

			},
			closed: function() {

			}
		}).open({
			name: product_title,
			amount: amount,
			allowRememberMe: 'false',
			currency: 'JPY'
		});
			
		return false;
		
	});
});
