var array = [1,2,'a',23,'a']
// remove all 'a' from the array

var set = new Set(array)
console.log(set)

set.delete('a')
console.log(set)

var newArr = Array.from(set)
console.log(newArr)