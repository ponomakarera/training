$(function () {

	var modal = document.getElementById('myModal');
	
	$('.edd_button').click(function(e) {
	
		var download_id = $(this).attr('download_id');
		var product_title = $(this).attr('product_title');
		var amount = Number($(this).attr('price'));
		
		StripeCheckout.configure({
			key: 'pk_test_S0hENx8vOQaCk3UsGTs3W0eC',
			locale: 'auto',
			token: function(token) {
				
				checkoutsubmit = true;
				$("#purchaseform").append("<input type='hidden' name='download_id' value='" + download_id + "'>");
				$("#purchaseform").append('<input type="hidden" name="edd_action" value="straight_to_gateway">');
				$("#purchaseform").append("<input type='hidden' name='edd_stripe_token' value='" + token.id + "' />");
				$("#purchaseform").append("<input type='hidden' name='edd_email' value='" + token.email + "' />");
				modal.style.display = "block";
				$("#myModal").append("<div class='modal-content'><div class='modal-header'><span style='font-size:20px; font-weight: bold;'>決済が完了しました</span><span class='close'>&times;</span></div><div id='modal-loadimage'></div><iframe id='iframe-content' name='targetframe' frameborder='0'><iframe></div>");
				console.log("first");
				document.targetform.submit();
				submitwait();
				$("#purchaseform").empty();
				
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
	
	function submitwait() {
		$("#iframe-content").on("load",function(){
			try {
				console.log("second");
				$("#modal-loadimage").remove();
			}
			catch(e) {
				alert(e.message);
			}
		});
	}
	
	
	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target.className == "modal-content") {
			return;
		}
		else if (event.target.className == "modal" || event.target.className == "close") {
			$("#myModal").empty();
			modal.style.display = "none";
		}
	}
});
