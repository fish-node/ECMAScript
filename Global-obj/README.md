# Global
- is created before control enters any execution context.
- neight has [[call]] nor [[constructor]] internal methods
- has a [[Prototype]] internal slot whose value is implementation-dependent.

- in browser, it is `window`
  window.[[prototype]] === Window.prototype
  Object.getPrototypeOf(window) === Window.prototype

  window.window === window

- in nodejs, it is `global`
  global.js

## Value Properties
- Infinity
- NaN
- undefined

## Function Properties
- eval(x)
- isFinite(number)
- isNaN(number)
...

## Constructor Properties
- Array(...)
- Boolean(...)
- Function(...)
- Object(...)
- Promise(...)
- RegExp(...)
...

## Other Properties
- Atomaic
- JSON
- Math
- Relfect


