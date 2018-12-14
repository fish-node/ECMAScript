// 'use strict'
function foo(arg1, arg2){
    "use strict"
    console.log(arguments)
    console.log(arguments[1])
    arguments = ['Hello', 'Hi']
}
foo('hello', 'hi')