var array = [1,2,'a',23,'a']
// remove all 'a' from the array

var newArr = array.filter(value => {
    return value != 'a'
})
console.log(newArr)



