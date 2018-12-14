var obj =  123
var a = Object.freeze(obj)
console.log(obj, a)

obj =  null
a = Object.freeze(obj)
console.log(obj, a)

obj =  undefined
a = Object.freeze(obj)
console.log(obj, a)