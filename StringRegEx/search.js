var co = console.log

var str = 'asdfddwwwddss'

var a = str.search('dd')
co(a)

var b = str.search(/dd/)
co(b)

var c = str.search(/dd/g)
co(c)

var d = str.search('sdfsa')
co(d)