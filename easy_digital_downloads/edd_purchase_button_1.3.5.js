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
		onOpening: function(modal){
			modal.startLoading();
			
			$('#iziModal').iziModal({
				iframe: true,
				iframeHeight: 100,
				iframeURL: "https://ponomakarera.com/checkout/purchase-confirmation/"
			});
			
			$.ajax({
				url: 'https://ponomakarera.com/checkout/purchase-confirmation/',
				type: "POST",
				dataType: "html",
				data:{download_id: download_id, edd_action: "straight_to_gateway", edd_stripe_token: id, edd_email: email},
				success: function(data) {
					modal.stopLoading();
					$('#iziModal').iziModal('open');
				},
				error: function(){

				}
			});
			
		}
 
	});
	
	$('#iziModal').iziModal('open');
	
	/*$("#iziModal").append("<p>ご記入したメールアドレス&nbsp;&lt;"+ email +"&gt;&nbsp;に商品のダウンロードリンクを記載<br>したレシートを送信しましたので、ご確認をお願いします。</p>")*/
	
}
});
