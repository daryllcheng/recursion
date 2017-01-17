// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
	var typeOfObj = typeof obj;
  if (typeOfObj === "undefined" || typeOfObj === "function") {
  	return "";
  }
  if (obj === null) {
  	return "null";
  }
  if (typeOfObj === "string") {
	  return '"' + obj + '"';
  }
  if (typeOfObj === "boolean" || typeOfObj === "number") {
	  return String(obj);
  }
  if (Array.isArray(obj)) {
  	return '[' + obj.map(function(element) {
  		return stringifyJSON(element);
  	}).join(",") + ']';
  }
  if (typeOfObj === "object") {
  	var stringifiedObj = [];
  	for (var key in obj) {
  		if (stringifyJSON(obj[key]) !== "") {
  			stringifiedObj.push('"' + key + '":' + stringifyJSON(obj[key]));
  		}
  	}
  	return '{' + stringifiedObj.join(",") + '}';
  }
};

