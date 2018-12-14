
var string = "afgoodsdood",
    substring = "oo";
console.log( string.indexOf(substring) ) // 3
console.log( string.indexOf(substring, 5) ) // 8
console.log( string.lastIndexOf(substring))// 8
substring = "gk";
console.log( string.indexOf(substring) ) // -1


var string = "foo",
    substring = "oo";
console.log( string.includes(substring,1) ) // ture
console.log( string.includes(substring,2) ) // false

var string = "foo",
    substring = "oo",
    expr = /oo/;
console.log( string.search(expr) ); // 1 

var string = "foodoo",
    expr = /oo/;
console.log( string.match(expr)) // 不符合返回null，否则返回数组
console.log( expr.test(string)) // ture