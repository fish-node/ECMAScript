var seal = function(obj){
    // Assert obj is object
    Object.preventExtensions(obj)
    for(var key in Object.getOwnPropertyNames(obj)){
        Object.defineProperty(obj, key, {
            writable: false,
            configurable:false
        })
    }
}