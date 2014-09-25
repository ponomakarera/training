<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js"></script>
<script src="http://code.jquery.com/jquery-latest.js"></script>
<script type="text/javascript" src="https://raw.githubusercontent.com/ponomakarera/training/master/sketch/sketch_v2.js"></script>
<div class="demo" id="colors_demo">
<div class="tools">
<a href="#colors_sketch" data-clear="clear" style="float: right;">CLEAR</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-erase="erase" style="float: right;">erase</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-next="next" style="float: right;">next</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-prev="prev" style="float: right;">prev</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-operation="redo" style="float: right;">redo</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-operation="undo" style="float: right;">undo</a>
<a style="float:right; text-decoration:none;">&nbsp;&nbsp;</a>
<a href="#colors_sketch" data-tool="line" style="float: right;">line</a>
</div>
<canvas id="colors_sketch" width="500" height="500"></canvas>
<script type="text/javascript">
  $(function() {
$.each(['#000000', '#1C1C1C', '#424242', '#6E6E6E', '#A4A4A4', '#D8D8D8', '#F2F2F2', '#FFFFFF'], function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-color='" + this + "' style='width: 10px; background: " + this + "; '></a>　");}); $.each([3, 5, 10, 15, 23], function() {$('#colors_demo .tools').append("<a href='#colors_sketch' data-size='" + this + "' style='background: #fff; width:10px;'>" + this + "</a> ");
              });
    $('#colors_sketch').sketch();
  });</script></div><a href="https://raw.githubusercontent.com/ponomakarera/training/master/sketch/license.txt">License</a>
