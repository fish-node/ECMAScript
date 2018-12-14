// 'use strict'
let obj = {
    a: 1,
    b: 2
}
Object.defineProperty(obj, 'a', {
    writable: false
})

obj.a = 3
console.log(obj.a)
 
