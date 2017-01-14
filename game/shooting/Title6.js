function Title() {
this.cours = 0;
}

Title.prototype.update = function (gameini) {
gameini.images.push({type:"dxy", src:"https://68.media.tumblr.com/a72e86b2be82c42f11969aea02047246/tumblr_nxsqourU8V1t0jrzao4_r2_500.jpg", dx:0, dy:80});//title.jpg
gameini.images.push({type:"dxy", src:"https://68.media.tumblr.com/0c06e0501aca16b4cd63202c1806734b/tumblr_nxsqourU8V1t0jrzao5_r2_100.png", dx:160, dy:300});//press.png
if (gameini.key.space()) {
	gameini.sequence = gameini.seqtype['game'];
}
}
