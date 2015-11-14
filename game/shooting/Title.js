function Title() {
this.cours = 0;
}

Title.prototype.update = function (gameini) {
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/473c1c59e7d97ecf58860c7c2b528868/tumblr_nxsqourU8V1t0jrzao4_400.png", dx:0, dy:0});
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/9ff982762ea31e0ae39eb1df079ed811/tumblr_nxsqourU8V1t0jrzao5_100.png", dx:60, dy:100});
if (gameini.key.space()) {
	gameini.sequence = gameini.seqtype['game'];
}
}
