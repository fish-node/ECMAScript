var obj = {
    a : 1,
    get b(){
        console.log('getting value..')
        return 1
    },
    set b(value){
        console.log('setting value: ' + value)
    }
}

console.log(obj)
console.log(obj.b)
obj.b = 3
console.log(Object.getOwnPropertyDescriptor(obj, 'b'))