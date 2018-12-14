function Foo(name){
    this.name = name
}
Foo.prototype = {
    age: 18
}

var person = new Foo('Bob')
var arr = new Array(1, 2, 3)
var obj = new Object()

console.log(person.age)