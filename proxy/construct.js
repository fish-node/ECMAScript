var Person = function(name){
    console.log('hi ' + name)
}

var PersonProxy = new Proxy(Person,{
    construct: function(target,args){
        // console.log(target)
        // console.log(args)
        var newObj = Object.create(target.prototype)
        newObj.name = args
        return newObj
    }
})

PersonProxy('Bob')
var p = new PersonProxy('Bob')
console.log(p)

// 实现了之前未尽的事业 [[call]] [[constructor]] 不一样