function foo() { 
    console.log( this.a );
}
var a = 1
var obj = { 
    a: 2,
    foo: foo 
}
var obj2 = {
    a: 3
}
obj.foo() // 2

bindFoo = obj.foo.bind(obj2)
bindFoo() // 3

var bar = bindFoo
bar() // 3