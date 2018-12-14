var res = (function(){
    var count = 0
    var result = {}
    result.incCount = function(){ 
        count++ 
    }
    result.getCount = function(){
        return count
    }
    return result
})() 
res.incCount()
res.incCount()
console.log( res.getCount())
