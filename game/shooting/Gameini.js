function Gameini() {
this.game = new Title();
this.key = new Keymanager();
this.seqtype = {title:1, game:2, gameover:3};
this.sequence = null;
this.images = [];
this.canvas = document.getElementById('maincanvas');
this.ctx = this.canvas.getContext('2d');
this.canvas.width = 500;
this.canvas.height = 500;
//this.update;
//setInterval("this.update", 16);
/*var a = this;
requestAnimationFrame( function() { a.update(); } );*/
}

Gameini.prototype.update = function () {
/*var b = this;
requestAnimationFrame( function() { b.update(); } );*/
//requestAnimationFrame(this.update);
//setInterval(this.game.update(this), 16);
this.game.update(this);
switch (this.sequence) {
case this.seqtype['title']: this.game = new Title(); break;
case this.seqtype['game']: this.game = new Game(); break;
case this.seqtype['gameover']: this.game = new Gameover(); break;
}
this.sequence = null;
this.render();
}

Gameini.prototype.render = function () {

this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
for (var i = 0; i < this.images.length; i++) {
this.image = new Image();
this.image.src = this.images[i].src;
switch (this.images[i].type) {
case "dxy": this.ctx.drawImage(this.image, this.images[i].dx, this.images[i].dy); break;
case "dxywh": this.ctx.drawImage(this.image, this.images[i].dx, this.images[i].dy, this.images[i].dw, this.images[i].dh); break;
case "sdxywh": this.ctx.dtawImage(this.image, this.images[i].sx, this.images[i].sy, this.images[i].sw, this.images[i].dx, this.images[i].dy, this.images[i].dw, this.images[i].dh); break;
}
}/*
this.images.forEach(function (image) {
this.image = new Image();
this.image.src = image.src;
switch (image.type) {
case "dxy": ctx.drawImage(this.image, image.dx, image.dy); break;
case "dxywh": ctx.drawImage(this.image, image.dx, image.dy, image.dw, image.dh); break;
case "sdxywh": ctx.dtawImage(this.image, image.sx, image.sy, image.sw, image.dx, image.dy, image.dw, image.dh); break;
}
});*/
this.images = [];
}

