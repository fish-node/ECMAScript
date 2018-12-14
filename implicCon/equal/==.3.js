var obj = {
    valueOf:function(){
        return 111
    }
}

var obj1 = {
    valueOf(){
        return 111
    }
}

console.log(obj == 111)
console.log(obj1 == 111)
console.log(obj == obj1)
