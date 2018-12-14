function log(o){
    console.log(`Boolean(${o}) is ` + Boolean(o))
}

log(null)
log(0)
log(NaN)
log({})
log(undefined)
log('')
console.log(Boolean(Symbol('sym')))
