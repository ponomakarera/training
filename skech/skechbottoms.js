$(function() {
$.each(['#000000', '#1C1C1C', '#424242', '#6E6E6E', '#A4A4A4', '#D8D8D8', '#F2F2F2', '#FFFFFF'], 
function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 10px; background: " + this + ";'></a>　");
}
);
$.each([3, 5, 10, 15, 23], function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #fff; width:10px;'>" + this + "</a> ");
}
);
$('#colors_sketch').sketch();
});
