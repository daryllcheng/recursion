// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  var elementsWithClassName = [];

  var filterElementsByClassName = function(node) {
  	if (_(node.classList).contains(className)) {
  		elementsWithClassName.push(node);
  	}
  	node.childNodes.forEach(function(childNode) {
  		filterElementsByClassName(childNode);
  	})
  }
  filterElementsByClassName(document.body);
  return elementsWithClassName;
};
