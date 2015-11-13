function Title() {
this.cours = 0;
}

Title.prototype.update = function (gameini) {
gameini.images.push({type:"dxy", src:"../rsrc/image/title.png", dx:0, dy:0});
gameini.images.push({type:"dxy", src:"../rsrc/image/press_space.png", dx:60, dy:100});
if (gameini.key.space()) {
	gameini.sequence = gameini.seqtype['game'];
}
}
