function foo(){
    var a = 3
    return function(){
        console.log(a)
        a++
    }
}

var bar = foo()

bar()
bar()