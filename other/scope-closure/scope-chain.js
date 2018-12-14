var a = 1
function foo(){
    var a = 3
    var b = 2
    function bar(){
        console.log(a,b)
    }
    bar()
}
foo()