var c = function(o){
    console.log(`${o} to number is :`)
    console.log(Number(o))
}

var obj = {
    name: 'Bob'
}
c(obj)

obj.valueOf = function(){
    return 333
}
c(obj)

obj.valueOf = undefined
obj.toString = function(){
    return 234
}
c(obj)

obj.valueOf = function(){
    return false
}
c(obj)