var a = 1
function foo(){
    console.log(this.a)
    console.log(this === global)
}
foo()