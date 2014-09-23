$(function() {
$.each(['#000000', '#1C1C1C', '#424242', '#6E6E6E', '#A4A4A4', '#D8D8D8', '#F2F2F2', '#FFFFFF'], function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a>　");}); $.each([3, 5, 10, 15, 23], function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #fff; width:10px;'>" + this + "</a> ");
              });
    $('#colors_sketch').sketch();
  });
  $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts?id=98223055450&api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&jsonp=?",function(data){$('#colors_demo .tools').append("<a href="#colors_sketch" data-setBaseImageURL=" + data.response.posts[0].photos[0].original_size.url + " style="float: right;">image</a>");});
