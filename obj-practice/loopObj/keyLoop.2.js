var proto = {
    a: 1
}

var obj = {
    b:2
}
Object.setPrototypeOf(obj, proto)
Object.defineProperty(obj,'c',{
        value:3,
        enumerable:false
})

console.log(Object.getOwnPropertyNames(obj))
for (let key of Object.getOwnPropertyNames(obj)){
    console.log(key)
}