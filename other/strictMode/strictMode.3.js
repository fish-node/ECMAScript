'use strict'
var me = {
    name: 'fish'
}
Object.defineProperty(me, 'name', {
    writable: false,
    enumerable: false,
})
me.name = 'tiger' 
console.log(me.name)