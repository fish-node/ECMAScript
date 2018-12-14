let obj = {
    a: 1,
    b: 2
}
// obj.[[GetOwnProperty]]('a')
console.log(Object.getOwnPropertyDescriptor(obj,'a'))

// obj.[[prototype]]
console.log(obj.__proto__)
console.log(Object.getPrototypeOf(obj))