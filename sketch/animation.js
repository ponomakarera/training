var __slice = Array.prototype.slice;
(function($) {
  var Sketch;
  var imageUrl = [];
  var urlCounter = 0;
  var maxphotos = 0;
  $.fn.sketch = function() {
    var args, key, sketch;
    key = arguments[0], args = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (this.length > 1) {
      $.error('Sketch.js can only be called on one element at a time.');
    }
    sketch = this.data('sketch');
    if (typeof key === 'string' && sketch) {
      if (sketch[key]) {
        if (typeof sketch[key] === 'function') {
          return sketch[key].apply(sketch, args);
        } else if (args.length === 0) {
          return sketch[key];
        } else if (args.length === 1) {
          return sketch[key] = args[0];
        }
      } else {
        return $.error('Sketch.js did not recognize the given command.');
      }
    } else if (sketch) {
      return sketch;
    } else {
      this.data('sketch', new Sketch(this.get(0), key));
      return this;
    }
  };
  Sketch = (function() {


    function Sketch(el, opts) {
      this.el = el;
      this.canvas = $(el);
      this.context = el.getContext('2d');

      this.bgcolor = 'rgb(255,255,255)';

      //背景色設定
      this.context.fillStyle = this.bgcolor;
      this.context.fillRect(0, 0, this.canvas.width(), this.canvas.height());
      
      
      $.getJSON("http://api.tumblr.com/v2/blog/ponomakarera.tumblr.com/posts/photo?api_key=1Uw1n0Yvp6uylFWhR8AyhgmPTgAlvItyeOFK6XKuYcMYiygM6V&tag=画像&limit=50&jsonp=?",function(data) {
      	for (var i in data.response.posts) {
      		for (var j in data.response.posts[i].photos) {
      			console.log(data.response.posts[i].photos[j].alt_sizes[data.response.posts[i].photos[j].alt_sizes.length - 1].url);
      			imageUrl.push(data.response.posts[i].photos[j].alt_sizes[].data.response.posts[i].photos[j].alt_sizes.length - 1url);
      			maxphotos++;
      		}
      	}
      });

      this.options = $.extend({
        toolLinks: true,
        defaultTool: 'marker',
        defaultColor: '#000000',
        defaultSize: 3
      }, opts);
      this.painting = false;
      this.color = this.options.defaultColor;
      this.size = this.options.defaultSize;
      this.tool = this.options.defaultTool;
      this.actions = [];
      this.action = [];
      this.undone = [];
      this.point = [];

      this.baseImageURL = "", //追加
      this.baseImageCache = "",


      this.canvas.bind('click mousedown mouseup mousemove mouseleave mouseout touchstart touchmove touchend touchcancel', this.onEvent);

			// iPhone対応追加
			var _this = this;
			this.canvas.get(0).addEventListener("touchend", function(){
				if (_this.action) {
					_this.actions.push(_this.action);
				}
				_this.painting = false;
				_this.action = null;
				return _this.redraw();
			});

      if (this.options.toolLinks) {
        $('body').delegate("a[href=\"#" + (this.canvas.attr('id')) + "\"]", 'click', function(e) {
          var $canvas, $this, key, sketch, _i, _len, _ref;
          $this = $(this);
          $canvas = $($this.attr('href'));
          sketch = $canvas.data('sketch');

          _ref = ['color', 'size', 'tool'];
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            key = _ref[_i];
            if ($this.attr("data-" + key)) {
            	if (!($(this).attr('data-tool') == "line")) {
            		sketch.set('tool', 'marker');
            	}

              sketch.set(key, $(this).attr("data-" + key));
            }
          }



          if ($(this).attr('data-download')) {
          	sketch.set('tool', 'marker');
            sketch.download($(this).attr('data-download'));
          }
          else if ($(this).attr('data-setBaseImageURL')) {
          	sketch.set('tool', 'marker');
            sketch.setBaseImageURL($(this).attr('data-setBaseImageURL'));
          }
          else if ($(this).attr('data-setBgcolor')) {
          	sketch.set('tool', 'marker');
            sketch.setBgcolor($(this).attr('data-setBgcolor'));
          }
          else if ($(this).attr('data-clear')) {
          	sketch.set('tool', 'marker');
            sketch.clear();
          }
          else if ($(this).attr('data-reset')) {
          	sketch.set('tool', 'marker');
            sketch.reset();
          }
          else if ($(this).attr('data-next')) {
          	sketch.set('tool', 'marker');
            sketch.next();
          }
          else if ($(this).attr('data-prev')) {
          	sketch.set('tool', 'marker');
            sketch.prev();
          }
          else if ($(this).attr('data-test')) {
          	sketch.set('tool', 'marker');
            sketch.test();
          }
          else if ($(this).attr('data-operation')) {
          	sketch.set('tool', 'marker');
              sketch.operation($(this).attr('data-operation'));
          }
          else if ($(this).attr('data-start')) {
            sketch.start();
          }

          return false;
        });
      }
    }
    Sketch.prototype.start = function() {
    	var i = 0;
        while (true) {
        	var j = 0;
        	if (i >= maxphotos) {
        		i = 0;
        	}
        	while (j++ > 10000) {
        		
        	}
        this.setBaseImageURL(imageUrl[i++]);	
        }
      };
    Sketch.prototype.newAction = function() {
        return this.action = {
          tool: this.tool,
          color: this.color,
          size: parseFloat(this.size),
          events: []
        };
      };
      Sketch.prototype.operation = function(mode) {
        if (mode === "undo" && this.actions.length > 0) {
          this.undone.push(this.actions.pop());
        } else if (mode === "redo" && this.undone.length > 0) {
          this.actions.push(this.undone.pop());
        } else if (mode === "erase") {
          this.undone = [];
          this.actions = [];
          this.action = {};
        }
        return this.redraw();
      };

    Sketch.prototype.setBgcolor = function(color) {
      this.bgcolor = color;
      this.redraw();
		}
    Sketch.prototype.test = function() {
    	
    	console.log("imageurl");
    	console.log(imageUrl);
    	console.log("\nurlCounter");
    	console.log(urlCounter);
    	console.log("\nmaxphos");
    	console.log(maxphotos);
    }


		// 追加
    Sketch.prototype.clear = function() {
			var cc = this.context;
			cc.setTransform(1, 0, 0, 1, 0, 0);
			cc.clearRect(0, 0, 1000, 1000);
			cc.restore();
			this.baseImageURL = "";
			this.baseImageCache = "";
			urlCounter = 0;
			this.actions = [];
			this.undone = [];
			this.action = {};
			this.redraw();
		}
　　Sketch.prototype.reset = function() {
　　	this.baseImageURL = "";
	this.baseImageCache = "";
	urlCounter = 0;
	this.redraw();
　　}
　　Sketch.prototype.next = function() {
　　	urlCounter += 1;
　　	if (urlCounter >= maxphotos) {
　　		urlCounter = maxphotos - 1;
　　	}
　　	this.setBaseImageURL(imageUrl[urlCounter]);
　　}
　　Sketch.prototype.prev = function() {
　　	urlCounter -= 1;
　　	if (urlCounter < 0) {
　　		urlCounter = 0;
　　	}
　　	this.setBaseImageURL(imageUrl[urlCounter]);
　　}

    Sketch.prototype.download = function(format) {
      var mime;
      format || (format = "png");
      if (format === "jpg") {
        format = "jpeg";
      }
      mime = "image/" + format;
      return this.el.toDataURL(mime);
    };
    Sketch.prototype.set = function(key, value) {
      this[key] = value;
      return this.canvas.trigger("sketch.change" + key, value);
    };
    Sketch.prototype.startPainting = function() {
      this.painting = true;
      return this.action = {
        tool: this.tool,
        color: this.color,
        size: parseFloat(this.size),
        events: []
      };
    };
    Sketch.prototype.stopPainting = function() {
      if (this.action) {
        this.actions.push(this.action);
      }
      this.painting = false;
      this.action = null;
      return this.redraw();
    };
    Sketch.prototype.onEvent = function(e) {
      if (e.originalEvent && e.originalEvent.targetTouches) {
        e.pageX = e.originalEvent.targetTouches[0].pageX;
        e.pageY = e.originalEvent.targetTouches[0].pageY;
      }
      $.sketch.tools[$(this).data('sketch').tool].onEvent.call($(this).data('sketch'), e);
      e.preventDefault();
      return false;
    };

    Sketch.prototype.setBaseImageURL = function(url){
     //this.clear();
     this.baseImageURL = url;
     this.baseImageCache = "";
     return this.redraw();
    }

    Sketch.prototype.redraw = function() {
      var sketch;
      this.el.width = this.canvas.width();
      this.context = this.el.getContext('2d');

      //背景色設定
      this.context.fillStyle = this.bgcolor;
      this.context.fillRect(0, 0, this.canvas.width(), this.canvas.height());


      if(this.baseImageURL){
       if(this.baseImageCache){
          this.context.drawImage(this.baseImageCache, 0, 0);
       } else {
        var img = new Image();    //新規画像オブジェクト
        var _this = this;
        img.src = this.baseImageURL;
        img.onload = (function(){
          _this.baseImageCache = img;
          _this.context.drawImage(img, 0, 0);
        });
       }
      }

      sketch = this;
      $.each(this.actions, function() {
        if (this.tool) {
          return $.sketch.tools[this.tool].draw.call(sketch, this);
        }
      });
      if (this.painting && this.action) {
        return $.sketch.tools[this.action.tool].draw.call(sketch, this.action);
      }
    };
    return Sketch;
  })();
  $.sketch = {
    tools: {}
  };
  $.sketch.tools.marker = {
    onEvent: function(e) {
    	this.point = 0;
      switch (e.type) {
        case 'mousedown':
        case 'touchstart':
          this.startPainting();
          break;
        case 'mouseup':
        case 'mouseout':
        case 'mouseleave':
        case 'touchend':
        case 'touchcancel':
          this.stopPainting();
      }
      if (this.painting) {
        this.action.events.push({
          x: e.pageX - this.canvas.offset().left,
          y: e.pageY - this.canvas.offset().top,
          event: e.type
        });
        return this.redraw();
      }
    },
    draw: function(action) {
      var event, previous, _i, _len, _ref;
      this.context.lineJoin = "round";
      this.context.lineCap = "round";
      this.context.beginPath();
      this.context.moveTo(action.events[0].x, action.events[0].y);
      _ref = action.events;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        event = _ref[_i];
        this.context.lineTo(event.x, event.y);
        previous = event;
      }
      this.context.strokeStyle = action.color;
      this.context.lineWidth = action.size;
      return this.context.stroke();
    }
  };

//Added
  $.sketch.tools.spoit = {
    onEvent: function(e) {
      switch (e.type) {
        case 'mousedown':
        case 'touchstart':
          $.sketch.tools.marker.onEvent.call(this, e);
        break;
      }
    },
    draw: function(action) {
      var event, previous, _i, _len, _ref;
      var cc = this.context;
      var spuitImage = cc.getImageData(action.events[0].x, action.events[0].y, 1, 1);
      var r = spuitImage.data[0];
      var g = spuitImage.data[1];
      var b = spuitImage.data[2];
      var spuit_color = 'rgb(' + r +','+ g + ',' + b +')';
      this.color = spuit_color ;

      setPaletColor(this.color); // Palletの色変更
      return false;
    }
  };

//Added
  $.sketch.tools.nuru = {
    onEvent: function(e) {
      switch (e.type) {
        case 'mousedown':
        case 'touchstart':
          alert("1");

        break;
      }
    },
    draw: function(action) {


      var event, previous, _i, _len, _ref;

      this.context.moveTo(action.events[0].x, action.events[0].y);
      this.context.fillStyle = "rgb(255, 0, 0)";
      this.context.fill();
      return this.context.stroke();

    }
  };
  $.sketch.tools.line = {
      onEvent: function(e) {
        var newPoint;
        switch (e.type) {
          case 'mousedown':
          case 'touchstart':
            newPoint = {
              x: e.pageX - this.canvas.offset().left,
              y: e.pageY - this.canvas.offset().top,
              event: e.type
            };
            if (this.point) {
              this.newAction();
              this.action.events.push(this.point);
              this.action.events.push(newPoint);
              this.actions.push(this.action);
              this.point = 0;
              return this.redraw();
            }
            else {
            this.point = newPoint;
            return this.redraw();
            }
            
        }
      },
      draw: function(action) {
        var event, previous, _i, _len, _ref;
        this.context.lineJoin = "round";
        this.context.lineCap = "round";
        this.context.beginPath();
        this.context.moveTo(action.events[0].x, action.events[0].y);
        _ref = action.events;
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          event = _ref[_i];
          this.context.lineTo(event.x, event.y);
          previous = event;
        }
        this.context.strokeStyle = action.color;
        this.context.lineWidth = action.size;
        return this.context.stroke();
      }
    };



  return $.sketch.tools.eraser = {
    onEvent: function(e) {
      return $.sketch.tools.marker.onEvent.call(this, e);
    },
    draw: function(action) {
      var oldcomposite;
      oldcomposite = this.context.globalCompositeOperation;

      this.context.globalCompositeOperation = "copy";
      action.color = "rgba(0,0,0,0)";
      $.sketch.tools.marker.draw.call(this, action);
      return this.context.globalCompositeOperation = oldcomposite;
    }
  };





})(jQuery);
