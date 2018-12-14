# this

## 为什么会有this
- python 中没有this的情况
  self.py self.js
- https://zhuanlan.zhihu.com/p/30164164
- 简化的代码，提高了理解成本

## 如何判断this？
基本的，除了强制绑定和严格模式下的一个特例（下面会说到），this一定是指代一个对象！关键是找到这个对象究竟是什么。

- new关键字
  new.js

- this存在于全局作用域中
  moren.js 

- this 存在于一个函数之中
  - 最基本情况
  base.js
    这时this就是指代全局对象。在node中运行结果是undefined,在浏览器中结果是2。因为在浏览器情况下，全局声明的变量会被挂载到全局对象window上，所以this.a的结果是2，而在node中不会。（一个无关痛痒的知识点，有的时候也挺烦人的啊。）

    不过有些人认为这种情况下将this绑定为全局对象不合理。作为妥协，在严格模式下，上述this不再指向全局对象，而变成了undefined，所以执行上述代码会报错。
  
  - 到底如何判断？
    this.*

  - 强制类型绑定
    bind.js