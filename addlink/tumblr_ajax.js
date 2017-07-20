$(function() {
    $.ajax('external.html', {
        datatype:'html'
    }).then(function(data){
        $('#ajax_data').html(data);
    },function(jqXHR, textStatus) {
        if(textStatus!=="success") {
            console.log("error");
        }
    });
});
