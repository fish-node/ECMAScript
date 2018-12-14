var obj = {}

Object.defineProperty(obj,'a', {
    value: 4,
    enumerable:true
})
Object.defineProperties(obj, {
    b: {
        value:3,
        enumerable: true
    },
    c: {
        value:5,
        enumerable: true
    }
})

console.log(obj)