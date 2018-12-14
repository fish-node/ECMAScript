var a = 1
function foo() { 
    var a = 2
    function bar() {
        console.log(this.a)
    }
    console.log(this.a)
    bar()
}
global.a = 0
foo()
var obj = {
    a: 3,
    foo: foo
}

obj.foo()
