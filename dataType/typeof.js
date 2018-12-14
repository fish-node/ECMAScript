var c = console.log

c('111: ' + typeof 111)
c('"string": ' + typeof 'string')
c('NaN: ' + typeof NaN)
c('null: ' + typeof null)
c('{}: ' + typeof {})
c('undefined: ' + typeof undefined)
c('Symbol(): ' + typeof Symbol('symbol'))
c('Object.create: ' + typeof Object.create)

function foo(){
}
c('foo: ' + typeof foo)