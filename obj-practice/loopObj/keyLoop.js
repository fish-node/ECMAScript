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


for (let key in obj){
    console.log(key)
}