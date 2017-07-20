$(function() {
    $.ajax('http://izumi-kazan.tumblr.com/', {
        datatype:'html'
    }).then(function(data){
        $('#ajax_data').html(data);
    },function(jqXHR, textStatus) {
        if(textStatus!=="success") {
            console.log("error");
        }
    });
});
