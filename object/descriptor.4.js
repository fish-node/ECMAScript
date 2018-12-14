let obj = {
    a: 1,
    b: 2
}

Object.defineProperty(obj, 'a', {
    configurable: false
})

Object.defineProperty(obj, 'a', {
    // enumerable: false
})

 obj.a = 3
 console.log(obj.a)
 
 for (let key in obj){
     console.log(key) // b
 }
 
 console.log( Object.keys(obj))  // [ 'b' ]
 console.log(Object.getOwnPropertyNames(obj)) // [ 'a', 'b' ]