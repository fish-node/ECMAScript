# strict mode
## 为什么存在
- 有些人希望语言灵活一点，出现不恰当操作静默失败
- 有些人希望严格一点，让一些不安全的操作抛出异常

## 使用
写在全局作用域最顶端或者函数作用域最顶端

### variables
- use before declare
- attempt to change unwirteable property
- attempt to add property to unextensible obj
- Deleting a variable, a function, or an argument will result in an error

### function
- Attempting to overwrite the arguments object will result in an error

### with(){}

with(){} statements are dead when strict mode is enabled 