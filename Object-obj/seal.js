var obj = {
    a: 34,
    b: 23
}
Object.seal(obj)
obj.a = 1111111
obj.c = 4

console.log(obj)
Object.defineProperty(obj, 'a', {
    value:32,
    enumerable:false
})