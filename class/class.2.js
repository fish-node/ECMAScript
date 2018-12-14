class Person{
    constructor(name){
        this.name = name
    }
    log(){
        console.log('hi :' + this.name)
    }
}

class Adult extends Person{
    constructor(name, age){
        super(name)
        this.age = age
    }
}

var a = new Adult('Lee', 33)
console.log(a)
console.log(Adult)