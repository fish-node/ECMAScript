var obj1 = {
    a: 1
}

function foo() {
    this.a = 3
}
var bindFoo = foo.bind(obj1)

var obj = new foo()
console.log(obj.a)  // 3
console.log(obj1.a) // 1