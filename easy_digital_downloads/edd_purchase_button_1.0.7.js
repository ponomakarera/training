$(function () {

	var download_id = $(this).attr('download_id');
	var product_title = $(this).attr('product_title');
	var amount = Number($(this).attr('price'));

	$('.edd_button').click(function(e) {
			
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {
				modal_window(token.id, token.email);

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
function modal_window(id, email) {

	$('#modal-default').iziModal({
 
		onOpening: function(modal){
 
			modal.startLoading();
		
			$.ajax({
				url: 'https://ponomakarera.com/checkout',
				type: "POST",
				dataType: "html",
				data:{download_id: download_id, edd_action: "straight_to_gateway", edd_stripe_token: id, edd_email: email},
				success: function(data) {
					$('#iziModal .iziModal-content').html(data);
					modal.stopLoading();
				},
				error: function(){
					console.log("error");
				}
			});
 
		}
 
	});
}
});
