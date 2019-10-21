// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

  var result = '';

  if (obj === null) {
    result += 'null';
    return result;
  }

  if (typeof obj === 'boolean') {
    result += obj;
  }

  if (typeof obj === 'number') {
    result += obj;
  }

  if (typeof obj === 'string') {
    result += '"' + obj + '"';
  }

  if (Array.isArray(obj)) {

    if (obj.length === 0) {
      result += '[]';
    }
    else {

      result += '[';

      for ( var i = 0; i < obj.length; i++ ) {
        result += stringifyJSON(obj[i]);
        if ( i !== obj.length - 1 ) {
          result += ',';
        }
      }

      result += ']';
    }
  }
  else if (typeof obj === 'object' ) {
    result += '{';

    for ( var i in obj ) {
      if (typeof obj[i] === 'function' || typeof obj[i] === 'undefined') break;
      result += stringifyJSON(i);
      result += ':';
      result += stringifyJSON(obj[i]);
      result += ',';
    }
    if ( result[result.length-1] === ',') {
      result = result.slice(0, result.length - 1);
    }
    result += '}';
  }

  return result;
};
