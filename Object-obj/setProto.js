var Duck = {
    makeSound:function(){
        console.log('ga ga ga')
    }
}

function Frog(){
}
Frog.prototype.makeSound = function(){
    console.log('gu gu gu')
}

var a = new Frog()

a.makeSound()

Object.setPrototypeOf(a, Duck)
a.makeSound()