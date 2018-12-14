function foo(){

}
foo.toString = function(){
  return 'I am foo'
}

console.log(String(foo))
console.log(foo + '')

