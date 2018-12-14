var a = [1, 2, 3]
console.log(a)
for(let key in a){
    console.log(key)
}

console.log(Object.getOwnPropertyDescriptor(a, 'length'))

Object.defineProperty(a, 'length', {
    enumerable: true
})
for(let key in a){
    console.log(key)
}