var arr = [1,2,3,3,2,1]

var newArr = arr.filter((value, index, thisArr) => {
    return thisArr.indexOf(value) === index
})
console.log(newArr)

var newArr1 = Array.from(new Set(arr))
console.log(newArr1)