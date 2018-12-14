let p = {
    a: 1,
    b: 2
 }
Object.defineProperty(p, 'a', {
    enumerable: false
})
 
for (let key in p){
    console.log(key) // b
}
 
 console.log( Object.keys(p))  // [ 'b' ]
 
 console.log(Object.getOwnPropertyNames(p)) // [ 'a', 'b' ]