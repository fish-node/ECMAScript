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

console.log(Object.keys(obj))
for (let key of Object.keys(obj)){
    console.log(key)
}