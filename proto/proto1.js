function Person(name){
    this.name = name
}
Person.prototype.run = function(){
    console.log('Person ' + this.name + ' is running')
}
var p = new Person('Bob')
p.run()

function Adult(name){
    this.name = name
}
Adult.prototype.work = function(){
    console.log('Adult ' + this.name + ' is running')
}
Object.setPrototypeOf(Adult.prototype, Person.prototype)
var a = new Adult('Jack')
a.work()
a.run()