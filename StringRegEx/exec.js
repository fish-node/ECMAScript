var reg = /aa[0-9]/
var co = console.log

var a = reg.exec('aa3ssaa1gg')
co(a)

reg = /aa[0-9]/g
a = reg.exec('aa3ssaa1gg')
co(a)

co(reg.test('aa3ssaa1gg'))