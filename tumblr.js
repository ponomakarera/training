Tumblr.prototype.getRequestToken = function() {
    var accessor = {
      consumerkey: "IlHqF8A1baAVnOkwKE7I2OsFXCUm0OCcXesdpa7u4oEavHCLrL",
      secretkey: "vYCDrauWRbCWFt3wZG7QIhFXrowwxNqYOjV640nXDlkClRd8Ah",
      
    };
   
    var message = {
      method: "GET",
      action: "http://twitter.com/oauth/request_token",
      parameters: {
        oauth_signature_method: "HMAC-SHA1",
        oauth_consumer_key: this.consumer.consumerKey
      }
    };
    OAuth.setTimestampAndNonce(message);
    OAuth.SignatureMethod.sign(message, accessor);
    var target = OAuth.addToURL(message.action, message.parameters);
    var options = {
      type: message.method,
      url: target,
      success: function(d, dt) { /* 返り値からRequest Token/Request Token Secretを取り出して、PINを取得するためのURLを作成 */ },
    };
    $.ajax(options); // 送信
  };
