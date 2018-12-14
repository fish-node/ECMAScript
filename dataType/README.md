# JS中有哪些数据类型？
ECMA规定了以下的数据类型

Undefined    --   undefined
Null         --   null
Number       --   +0 3.14 NaN Infinity 。。。
String       --   '' 'adfw' '1,34' 。。。 
Boobean      --   true false
Symbol       --   Symbol('sa')

Object       --   object function

## primitive value

## 函数
es中，所有的函数都被包装成函数对象
- 一个对象如果实现了[[call]]方法，就可以当做普通函数使用
- 一个对象如果实现了[[constructor]]方法，就可以当做构造函数用
- 一般来说，我们自己声明的函数，它既可以当做普通函数用，也可以当做构造函数用（无论你的初衷是什么）。它的[[call]] [[constructor]]的函数体是相同的
- 内置的String函数对象，[[call]] [[constructor]]的函数体是不相同的
- Symbol函数对象，可以当做普通函数用，但是不能当做构造函数用


## 类型装箱
很多编程语言都存在这种现象
primitive.js

## typeof
null本来是bug，后来将错就错了。
object比较复杂，后来再说




