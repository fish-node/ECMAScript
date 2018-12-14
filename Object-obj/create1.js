function Person(name){
    this.name = name
}

var p1 = new Person('Bob')

var p2 = Object.create(Person.prototype)
p2.name = 'Bob'

console.log(p1, p2)