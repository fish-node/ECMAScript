var array = [1,2,'a',23,'a']
// remove all 'a' from the array

function remByVal(arr, el){
    for(var i = 0; i <= array.length; i++){
        if(array[i] === 'a'){
            array.splice(i,1)
            i--
        }
    }
}
remByVal(array,'a')
console.log(array)