function Person(name){
    this.name = name
}
Person.prototype.log = function(){
    console.log('hi :' + this.name)
}

var p = new Person('Joh')
console.log(p)