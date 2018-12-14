function sum(a) {
    var sum = a

    function f(b) {
      sum += b
      return f
    }

    f.toString = function() { return sum }
  
    return f
}

console.log(sum(1) + '')  // 1

console.log(sum(1)(2) + '') // 3

console.log(sum(1)(2)(3) + '') // 6
console.log(sum(1)(2)(3)(4) + '') // 10

