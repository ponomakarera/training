function Game() {
this.x = 50;
this.y = 250;
this.mx = 0;
this.my = 0;
this.shot = new Array(20);
this.shotini();
this.shotspeed = 4;
this.oldkey = 0;
this.burston = 0;
}

Game.prototype.update = function (gameini) {
this.player(gameini);
this.fire(gameini);
}

Game.prototype.player = function (gameini) {
this.mx = 0;
this.my = 0;
if (gameini.key.up()) {
	this.my = -1;
}
if (gameini.key.down()) {
	this.my = 1;
}
if (gameini.key.right()) {
	this.mx = 1;
	console.log("a");
}
if (gameini.key.left()) {
	this.mx = -1;
}
if (this.x + this.mx >= 0 && this.x + this.mx <= 460) {
this.x += this.mx;
}
if (this.y + this.my >= 0 && this.y + this.my <= 460) {
this.y += this.my;
}
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/1ae567bb227c212c2363222a1aaf1462/tumblr_nxsqourU8V1t0jrzao2_75sq.png", dx:this.x, dy:this.y});
}

Game.prototype.fire = function (gameini) {
for (var i = 0; i < this.shot.length; i++) {
if (this.shot[i].exist) {
if (this.shot[i].burstshot) {
this.shot[i].x += this.shotspeed * 2;
}
else {
this.shot[i].x += this.shotspeed;
}
}
if (this.shot[i].x >= 500) {
this.shot[i].exist = 0;
this.shot[i].x = 0;
this.shot[i].y = 0;
this.shot[i].burstshot = 0;
}
}
if (this.oldkey && !gameini.key.space()) {
for (var i = 0; i < this.shot.length; i++) {
if (!(this.shot[i].exist)) {
this.shot[i].exist = 1;
this.shot[i].x = this.x;
this.shot[i].y = this.y;
this.shot[i].burstshot = this.burston >= 60 ? 1 : 0;
this.burston = 0;
break;
}
}
}
else if (this.oldkey && gameini.key.space()) {
if (this.burston >= 60) {
this.burston = 60;
}
this.burston++;
}
if (gameini.key.space()) {
this.oldkey = 1;
}
else {
this.oldkey = 0;
}
for (var i = 0; i < this.shot.length; i++) {
if (this.shot[i].exist) {
if (this.shot[i].burstshot) {
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/4dc4afe73f4e35c26acb4d5c0960d16e/tumblr_nxsqourU8V1t0jrzao1_75sq.png", dx:this.shot[i].x, dy:this.shot[i].y});
}
else {
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/ad0e30a6db7e2eff000a6286c61c5a31/tumblr_nxsqourU8V1t0jrzao3_75sq.png", dx:this.shot[i].x, dy:this.shot[i].y});
}
}
}
} 

Game.prototype.shotini = function () {
for (var i = 0; i < this.shot.length; i++) {
this.shot[i] = new Shotxy();
}
}

function Shotxy() {
this.x = 0;
this.y = 0;
this.exist = 0;
this.burstshot = 0;
}
