var obj1 = {
    a: 1
}
var obj2 = {
    a: 2
}

function foo() {
    console.log(this.a)
}
var bindFoo = foo.bind(obj1)
bindFoo.call(obj2)
bindFoo.apply(obj2)