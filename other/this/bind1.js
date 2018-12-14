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
obj.foo.call(obj2)
var bar = obj.foo
bar.call(obj2)