## === 
1. If Type(x) is different from Type(y), return false. 
2. If Type(x) is Number, then
  a. If x is NaN, return false.
  b. If y is NaN, return false.
  c. If x is the same Number value as y, return true. 
  d. If x is +0 and y is ‐0, return true.
  e. If x is ‐0 and y is +0, return true.
  f. Return false.
3. Return SameValueNonNumber(x, y).


## ==
1. If Type(x) is the same as Type(y), then
  a. Return the result of performing Strict Equality Comparison x === y.

2. If x is null and y is undefined, return true.
3. If x is undefined and y is null, return true.
```
console.log(null == undefined)  // true
```

4. If Type(x) is Number and Type(y) is String, return the result of the comparison x == ToNumber(y).
5. If Type(x) is String and Type(y) is Number, return the result of the comparison ToNumber(x) == y.
```
console.log( '123' == 123) // true
console.log( '0b11' == 3)  // true
```
==.js
这步也是为什么设定 NaN !== NaN

6. If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.
7. If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).
```
console.log(false == 0)
console.log( true == '1')
```

8. If Type(x) is either String, Number, or Symbol and Type(y) is Object, return the result of the comparison x ==
ToPrimitive(y).
9. If Type(x) is Object and Type(y) is either String, Number, or Symbol, return the result of the comparison ToPrimitive(x)
== y.
object -> number or string
==.1.js

10. Return false. 


==传递性，===有