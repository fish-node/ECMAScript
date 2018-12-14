var obj_ = {
    a:2,
    b:function(){
        console.log(this.a)
    }
}

// new Object()

var obj = Object.create(obj_)
obj.name = 'Bob'
console.log(obj)