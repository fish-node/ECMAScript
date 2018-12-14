var obj = {
    valueOf:function(){
        return 111
    }
}

console.log( obj == 111)

var obj = {
    valueOf:function(){
        return false
    }
}

console.log( obj == '0')