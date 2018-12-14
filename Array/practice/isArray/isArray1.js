var arr = [1,2,3]

var proxy = new Proxy(arr,{})

console.log(Array.isArray(proxy))