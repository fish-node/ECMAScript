var obj = {
    valueOf:function(){
        return 111
    },
    toString(){
        return 'aaa'
    }
}

console.log( obj == 'aaa')
