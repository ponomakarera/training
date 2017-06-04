(function () {

	var script = document.getElementsByTagName('script');
	currentScript = script[script.length - 1];
	
	closestByClass(currentScript, "addlink").classList.toggle('addlink');
	
	function closestByClass(element, classname) {
		// Traverse the DOM up with a while loop
		while ((' '+ element.className +' ').indexOf(' '+ classname +' ') < 0) {
			// Increment the loop to the parent node
			element = element.parentNode;
			if (!element) {
				return null;
			}
		}
		// At this point, the while loop has stopped and `element` represents the element that has
		// the class you specified in the second parameter of the function `classname`

		// Then return the matched element
		return element;
	}
	
})();
