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

obj.toString = function(){
    return 'hi, I am ' + this.name
}
log(obj)