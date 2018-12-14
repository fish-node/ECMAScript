function foo(){
    var a = 3  // 词法作用域
    function bar(){
        console.log(a)
    }
    return bar
}

function foo1(){
    var a = 4  // 动态作用域
    var bar1 = foo()
    bar1()
}
foo1()