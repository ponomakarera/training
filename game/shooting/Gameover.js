function Gameover() {
}

Gameover.prototype.update = function (gameini) {
gameini.images.push({type:"dxy", src:"./gameover.png", dx:0, dy:0});
if (gameini.key.up()) {
gameini.sequence = gameini.seqtype['title'];
}
this.count++;
}
