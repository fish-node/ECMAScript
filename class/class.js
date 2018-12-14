class Person{
    constructor(name){
        this.name = name
    }
    log(){
        console.log('hi :' + this.name)
    }
}

var p = new Person('Joh')
console.log(p)