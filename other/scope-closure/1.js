function addProperty(o) {
    // var value
 
    o.get = function()  { return value }
    o.set = function(v) { value = v }
 }
 
 var a = {}
 addProperty(a)
 var b = {}
 addProperty(b)
 
a.set(4)
b.set(5)
console.log( a.get())
console.log( b.get())

