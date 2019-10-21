// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node
) {
  // your code here
  if (node === undefined) {
    node = document.body;
  }

  var result = [];

  if ( node.classList && node.classList.contains(className) ) {
    result.push(node);
  }

  node.childNodes.forEach( function(element) {
    getElementsByClassName(className, element);
  } );

  return result;
};

