# String
standard biult-in function object

- String ( value )
  value -> to String type
  String.js

# String.property
- intrinsic obj
- is a String exotic object and has the internal methods specified for such objects
- has a [[StringData]] internal slot whose value is the empty String
- has a length property whose initial value is 0 and whose attributes are { [[Writable]]: false, [[Enumerable]]: false, [[Configurable]]: false }
- has a [[Prototype]] internal slot whose value is the intrinsic object %ObjectPrototype%
- String.prototype.constructor === String

## String.prototype.concat ( ...args )
concat.js

## String.prototype.endsWith ( searchString [ , endPosition ] )
min(max(endPosition, 0), len) - len(searchString)
endsWith.js
## String.prototype.lastIndexOf ( searchString [ , position ] )

## String.prototype.includes ( searchString [ , position ] )
includes.js

## String.prototype.match ( regexp )
- //g return all matched elements as array or null
- // return first matches element or null
match.js

## String.prototype.search ( regexp )
search.js

## String.prototype.repeat ( count )
repeat.js

## String.prototype.replace ( searchValue, replaceValue )
replace.js

## String.prototype.slice ( start, end )
## String.prototype.split ( separator, limit )

## String Instances
String instances are String exotic objects and have the internal methods specified for such objects. String instances inherit properties from the String prototype object. String instances also have a [[StringData]] internal slot.
String instances have a length property, and a set of enumerable properties with integer-indexed names.
 { [[Writable]]: false, [[Enumerable]]:
false, [[Configurable]]: false }

# RegExp
## RegExp.prototype.exec ( string )
exec.js

# practice
practice