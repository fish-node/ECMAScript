function Person(name){
    this.name = name
}
Person.prototype.log = function(){
    console.log('hi :' + this.name)
}

function Adult(name, age){
    Person.call(this,name)
    this.age = age
}
Object.setPrototypeOf(Adult.prototype, Person.prototype)

var a = new Adult('Lee', 33)
console.log(a)