var obj = {
    a: 'hi'
}
console.log(obj.a) // obj.[[get]]('a')

var proxy = new Proxy(obj, {
    get: function(target, property){
        return target[property] + ' world'
    }
})

console.log(proxy.b)

obj.b = 'hello'
console.log(proxy.b)
