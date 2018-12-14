function Person(name, birthyear){
    this.name = name
    this.age = 2018 - birthyear
}

var p = new Person('lee', 1999)
console.log(p)