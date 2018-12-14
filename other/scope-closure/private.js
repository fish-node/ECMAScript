var res = (function(){
    var count = 0
    return {
        incCount : function(){ 
            count++ 
        },
        getCount : function(){
            return count
        }
    }
})() 
res.incCount()
res.incCount()
count = 4
console.log( res.getCount())
