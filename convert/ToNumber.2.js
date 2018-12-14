// ECMA写的很复杂，我也没看太懂
// 记住就行了
var c = function(o){
    console.log(`${o} to number is :`)
    console.log(Number(o))
}

var a = '1341234'
c(a) 

a = 'dfs324'
c(a)

a = 'false'
c(a)

a = '0x232'
c(a)

a = '0b11'
c(a)

a = 'NaN'
c(a)
console.log(typeof Number(a))

a = '-Infinity'
c(a)