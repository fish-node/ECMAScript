var obj = {a:124}
console.log(Object.isExtensible(obj))
Object.preventExtensions(obj)
console.log(Object.isExtensible(obj))

obj.b = 32
console.log(obj)

delete obj.a
console.log(obj)