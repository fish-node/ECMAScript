var obj = {
    a: 1,
    b: 2,
    [Symbol.iterator]:function(){
        return {
            next: function(){
                return {
                    value: 111,
                    done: false
                }
            }
        }
    }
}
for(var key in obj){
    console.log(key)
}

for(var xxx of obj){
    console.log(xxx)
}