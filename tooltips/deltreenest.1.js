function deltreenest(major, minor){
   for (var key in dic) {
											if (key.match(new RegExp(minor +"→(.+)"))) {
												deltreenest(minor, RegExp.$1);
											}
											delete dic[major +"→"+ minor];
										}

}
