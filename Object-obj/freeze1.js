var obj = {
    a: 34,
    b: 23
}
Object.freeze(obj)
obj.a = 11111
obj.c = 4

console.log(obj)
