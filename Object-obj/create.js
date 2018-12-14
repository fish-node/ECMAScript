var obj = {
    a: 123,
    b: 'hi'
}

var obj_ = Object.create(Object.prototype, {
    a: {
        value: 123,
        enumerable: true, // default: false
        writable: true,   // default: false
        configurable: true// default: false
    },
    b: {
        value: 'hi',
        enumerable: true,
        writable: true,
        configurable: true
    }
})

console.log(obj, obj_)
console.log(Object.getOwnPropertyDescriptor(obj_,'b'))