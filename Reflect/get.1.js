var obj = {
    a:1
}

var objProxy = new Proxy(obj, {
    get: function(target, property){
        return target[property] * 100
    },
    set: function(target,property,value){
        target[property] = value
    }
})

console.log(obj.a)
objProxy.b = 222
console.log(obj)
