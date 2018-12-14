var a = 1
function foo() { 
    var a = 2
    function bar() {
        var a = 3
        function biu() {
            console.log(this.a)
        }
        biu()
    }
    bar()
}
foo()
