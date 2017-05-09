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
		
			$.ajax({
				url: 'https://ponomakarera.com/checkout',
				type: "POST",
				dataType: "html",
				data:{download_id: download_id, edd_action: "straight_to_gateway", payment_key: "stripe_checkout", edd_stripe_token: 'tekitou', edd_email: email},
				success: function(data) {
				
				},
				error: function(){
					console.log(email);
					$('#iziModal .iziModal-content').html("<p>お買い上げありがとうございました。<br>あなたのメールアドレス<"+ email +">に商品のダウンロードリンクを記載したレシートを送信しましたので、ご確認をお願いします。</p>");
					modal.stopLoading();
				}
			});
 
		}
 
	});
	
	$('#iziModal').iziModal('open');
}
});
