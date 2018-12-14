# 原型
- 原型就是一个对象可以继承原型对象上的属性和方法
- Java中基于类的继承
  - 类的实例之间没有联系
- Object.cerate(proto, properties)
  create.js
- JS中的原型链
  - 从语法的角度来说，一个原型对象和普通对象没区别
  - 但是它们的抽象意义不同,这个是关键
- new关键字和构造函数
  - new + 构造函数就是给前面说的内容的简写
  - 不要和面对对象中的new混淆
  - 创建一个以Constructor.prototype为原型的对象
  - this指向它
  - 完成函数内部的操作
- 上面说的才符合ECMA标准所说的原型和原型链
  
## 内置对象的原型链
prototype.js

- Array
- Function
- Object.prototype