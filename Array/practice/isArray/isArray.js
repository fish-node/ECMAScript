function isArray(obj){
    return Object.getPrototypeOf(obj) === Array.prototype
}

console.log( isArray([1,2,3]) )
console.log( isArray({}))