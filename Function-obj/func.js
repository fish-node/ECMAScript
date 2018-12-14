var foo = new Function('a,b','c','console.log(a + b + c)')
foo(1,2,3)
console.log( foo.length )
