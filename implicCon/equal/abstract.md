### SameValueNonNumber (x, y)
The internal comparison abstract operation SameValueNonNumber(x, y), where neither x nor y are Number values, produces
true or false. Such a comparison is performed as follows:
1. Assert: Type(x) is not Number.
2. Assert: Type(x) is the same as Type(y). 
3. If Type(x) is Undefined, return true.
4. If Type(x) is Null, return true.
5. If Type(x) is String, then
  a. If x and y are exactly the same sequence of code units (same length and same code units at corresponding indices), return true; otherwise, return false.
6. If Type(x) is Boolean, then
  a. If x and y are both true or both false, return true; otherwise, return false.
7. If Type(x) is Symbol, then
  a. If x and y are both the same Symbol value, return true; otherwise, return false.
8. Return true if x and y are the same Object value. Otherwise, return false.

### SameValue (x, y)
The internal comparison abstract operation SameValue(x, y), where x and y are ECMAScript language values, produces true
or false. Such a comparison is performed as follows:
1. If Type(x) is different from Type(y), return false. 2. If Type(x) is Number, then
  a. If x is NaN and y is NaN, return true.
  b. If x is +0 and y is ‐0, return false.
  c. If x is ‐0 and y is +0, return false.
  d. If x is the same Number value as y, return true. e. Return false.
3. Return SameValueNonNumber(x, y).
NOTE This algorithm differs from the Strict Equality Comparison Algorithm in its treatment of signed zeroes and
NaNs.

### SameValueZero (x, y)
The internal comparison abstract operation SameValueZero(x, y), where x and y are ECMAScript language values, produces
true or false. Such a comparison is performed as follows:
1. If Type(x) is different from Type(y), return false. 2. If Type(x) is Number, then
  a. If x is NaN and y is NaN, return true. 
  b. If x is +0 and y is ‐0, return true.
  c. Ifxis‐0andyis+0,returntrue.
  d. If x is the same Number value as y, return true. e. Return false.
3. Return SameValueNonNumber(x, y).
NOTE SameValueZero differs from SameValue only in its treatment of +0 and ‐0.