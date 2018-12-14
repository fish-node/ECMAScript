var obj = {
    a: 'hi'
}
console.log(obj.a) // obj.[[get]]('a')

var proxy = new Proxy(obj, {
    get: function(target, property){
        console.log(target, property)
        console.log('getting property: ' + property)
        return target[property] + ' world'
    }
})
console.log(proxy.a)