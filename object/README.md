# 对象

## 对象的属性描述符
descriptor.js
- wirtable
- enumerable
- configurable

## 对象的访问属性（accessor property）
accessor.*

## internal slots
- prototype
- 
 
## internal methods
- set
- getPrototypeof

## 分类
- standard obj    not-standard obj
- built-in obj    not-built-in obj
- ordinary obj    exotic obj

## exotic
A bound function is an exotic object that wraps another function object.
An Array object is an exotic object that gives special treatment to array index property keys.
A String object is an exotic object that encapsulates a String value and exposes virtual integer indexed data properties corresponding to the individual code unit elements of the String value.
An arguments exotic object is an exotic object whose array index properties map to the formal parameters bindings of an invocation of its associated ECMAScript function.
An Integer Indexed object is an exotic object that performs special handling of integer index property keys. Integer Indexed exotic objects have the same internal slots as ordinary objects additionally [[ViewedArrayBuffer]], [[ArrayLength]], [[ByteOffset]], and [[TypedArrayName]] internal slots. (V.Z.: Typed Arrays)
A module namespace object is an exotic object that exposes the bindings exported from an ECMAScript Module.
A proxy object is an exotic object whose essential internal methods are partially implemented using ECMAScript code.
[...] exotic function objects whose evaluative behaviour is expressed in some implementation defined form of executable code other than via ECMAScript code. (V.Z.: browser native code functions; too many to list)




