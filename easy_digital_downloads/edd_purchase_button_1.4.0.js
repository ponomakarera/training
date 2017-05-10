$(function () {

	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
			
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {

				modal_window(download_id, token.id, token.email);

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
function modal_window(download_id, id, email) {

	$('#iziModal').iziModal({
		title: '決済が完了しました',
		headerColor: '#00830c',
		iframe: true,
		iframeHeight: 800,
		iframeURL: "https://ponomakarera.com/checkout/purchase-confirmation/"
 
	});
	
	$.ajax({
		url: 'https://ponomakarera.com/checkout/purchase-confirmation/',
		type: "POST",
		dataType: "html",
		data:{download_id: download_id, edd_action: "straight_to_gateway", edd_stripe_token: id, edd_email: email},
		success: function(data) {
			$('#iziModal').iziModal('open');
		},
		error: function(){

		}
	});
	
}
});
