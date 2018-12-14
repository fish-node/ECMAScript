var obj = {
    a: 'hi'
}
obj.a = 'hello' // obj.[[set]]('a', 'hello')

var proxy = new Proxy(obj, {
    set: function(target, property, value){
        target[property] = value
        console.log('setting: ' + property)
    }
})

proxy.b = 'hihi'
console.log(obj)