function Person(birthyear){
    this.birthyear = birthyear
}
Person.prototype.logAge = function(){
    console.log(2018 - this.birthyear)
}

var p = new Person(1999)
p.logAge()