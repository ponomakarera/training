function Title() {
this.cours = 0;
}

Title.prototype.update = function (gameini) {
gameini.images.push({type:"dxy", src:"http://41.media.tumblr.com/db5704dae9e2f99cb6a88d7b594708b9/tumblr_nxsqourU8V1t0jrzao4_r1_400.jpg", dx:0, dy:80});//title.jpg
gameini.images.push({type:"dxy", src:"http://40.media.tumblr.com/9ff982762ea31e0ae39eb1df079ed811/tumblr_nxsqourU8V1t0jrzao5_100.png", dx:60, dy:100});//press.png
if (gameini.key.space()) {
	gameini.sequence = gameini.seqtype['game'];
}
}
