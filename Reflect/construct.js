function Person(name){
    this.name = name
}
var p1 = new Person('Bob') // Person.[[construct]]('Bob')
console.log(p1)

var p2 = Reflect.construct(Person, ['Bob'])
console.log(p2)