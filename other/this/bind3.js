function foo(x, y) { 
    console.log( this.a + x + y);
}
var a = 1
var obj = { 
    a: 2,
    foo: foo 
}
var obj2 = {
    a: 3
}

foo.apply(obj, [0, 0]) // 2
obj.foo.call(obj2, 0, 0) // 3