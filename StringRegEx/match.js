var co = console.log
var str = 'aassddccff'

var a = str.match(/asd/)
co(a)

var b = str.match(/aa/)
co(b)

var c = str.match(/aa/g)
co(c)

var d = str.match(/a/g)
co(d)