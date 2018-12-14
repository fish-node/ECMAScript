function foo() { 
    console.log( this.a );
}
var a = 1
var obj = { 
    a: 2,
    foo: foo 
}
obj.foo()
var bar = obj.foo
bar()
