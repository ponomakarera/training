var tumblr = require('https://raw.githubusercontent.com/tumblr/tumblr.js/master/lib/tumblr.js');
var client = tumblr.createClient({
  consumer_key: 'IlHqF8A1baAVnOkwKE7I2OsFXCUm0OCcXesdpa7u4oEavHCLrL',
  consumer_secret: 'vYCDrauWRbCWFt3wZG7QIhFXrowwxNqYOjV640nXDlkClRd8Ah',
  token: 'FaXeTXVry55STNqHu3qQJegQdYTkO8qUzsP42KfJYBu4G5PNYI',
  token_secret: 'OlmAH3tZ71GZxZQavB6rBkwvdQssAqrSOvmLH3qQooeh9QzzYV'
});

var test = function () {client.userInfo(function (err, data) {
    data.user.blogs.forEach(function (blog) {
        console.log(blog.name);
    });
});};
