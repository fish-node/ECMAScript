var a = null
var b = {}

function isObj(o){
    return o !== null && typeof o === 'object'
}
console.log( isObj(a))
console.log( isObj(b))