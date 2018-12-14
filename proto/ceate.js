// obj = {}
// obj = new Construstor()

var obj = {
    a: 1,
    sayHi: function(){
        console.log('hi')
    }
}
var obj1 = Object.create(obj, {
    b: {
        value: 2,
        writable: true,
        enumerable: true
    }
})
// var obj1 = Object.create(obj)
// obj1.b = 2


console.log(obj1.a)
obj1.sayHi()