(function () {

	
	var currentScript = document.currentScript || (function() {
		var nodeList = document.getElementsByTagName('script')
		console.log("nodeList.item is "+ nodeList.item(nodeList.length - 1))
		return nodeList.item(nodeList.length - 1)
	}())	
	
	var closestByClass = function(element, classname) {
		// Traverse the DOM up with a while loop
		while (element.className != classname) {
			// Increment the loop to the parent node
			element = element.parentNode;
			if (!element) {
				console.log("no addlink ");
				return null;
			}
		}
		// At this point, the while loop has stopped and `element` represents the element that has
		// the class you specified in the second parameter of the function `classname`

		// Then return the matched element
		console.log("element is "+ element);
		return element;
	}
	
	closestByClass(currentScript, "addlink")[0].classList.toggle('addlink');
	
})();
