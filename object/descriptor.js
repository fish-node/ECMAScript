let obj = {
    a: 1,
    b: 2
}
var log = console.log

log(Object.getOwnPropertyDescriptor(obj, 'a'))

// obj.a = 3
Object.defineProperty(obj, 'a', {
    value: 3
})
console.log(obj.a)
