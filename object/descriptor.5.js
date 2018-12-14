let obj = {
    a: 1,
    b: 2
 }

Object.defineProperty(obj, 'a', {
    writable: false,
    configurable: false
})