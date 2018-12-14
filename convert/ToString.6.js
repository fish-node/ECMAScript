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
    return {
        name: 'Bob'
    }
}
log(obj)