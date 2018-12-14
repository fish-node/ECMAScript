# Object
- standard built-in object
- is a property of global object
- has both [[call]] [[constructor]] internal methods
- Object.[[prototype]]  ===  Function.prototype
- Object.prototype != Object.[[prototype]]

具体参考MDN或者ECMA2018 19.1.1
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

## Object ( [ value ] )
- 将value转换为object类型
toObject.js

## Object.create ( O, Properties )
create.js

## Object.assign ( target, ...sources )

## Object.defineProperties ( O, Properties )
## Object.defineProperty ( O, P, Attributes )
defineProperty.js

## Object.preventExtensions(O)
O.[[isExtensiona]]
preExt.js

## Object.setPrototypeOf ( O, proto )
O.[[prototype]] = proto
serProto.js

## Object.seal ( O )
seal.js

## Object.freeze ( O )
freeze.js
