$(function(){
  var pageTop = $("#page-top");
  pageTop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
  $(window).scroll(function () {
    if($(this).scrollTop() >= 200) {
      pageTop.css( "bottom", "10px" );
    } else {
      pageTop.css( "bottom", "-60px" );
    }
  });
});
