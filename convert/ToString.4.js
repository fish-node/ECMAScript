var log = function(o){
    console.log(String(o))
}

var obj = {
    name: 'Bob',
    sayHi: function(){
        console.log('hi')
    }
}

log(obj)
obj.toString = undefined

obj.valueOf = function(){
    return 'hi, I am ' + this.name
}
log(obj)