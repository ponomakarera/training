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
				$("#myModal").append("<div class='modal-content'><div class='modal-header'><span style='font-size:20px; color:#FFFFFF; font-weight: bold;'>決済が完了しました</span><span class='close'>&times;</span></div><div id='loader-bg'><div id='loader'><img src='https://68.media.tumblr.com/3deca5e6cc1f2370cc98b4eefd4d6f64/tumblr_oqd6d5WpLk1t0jrzao1_75sq.gif'></div></div><iframe id='iframe-content' name='targetframe' frameborder='0'><iframe></div>");
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
	
		var off = $('#loader-bg').offset();
		$('#iframe-content').offset({ top: off.top, left: off.left });
		$('#iframe-content').css('display', 'none');
		
		$("#iframe-content").on("load",function(){
			try {
				$('#loader').fadeOut(50);
				$('#iframe-content').fadeIn(400);
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
	
	//close button for ios
	$('.close').on('click', function () {
		$("#myModal").empty();
		modal.style.display = "none";
	});
});
