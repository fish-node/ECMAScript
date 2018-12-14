# 对象的访问属性（accessor property）
- An Object is logically a collection of properties.
- Each property is either a data property, or an accessor property
 - A data property associates a key value with an ECMAScript language value and a set of Boolean attributes.
 - An accessor property associates a key value with one or two accessor functions, and a set of Boolean attributes. The accessor functions are used to store or retrieve an ECMAScript language value that is associated with the property.

不在使用键值对，而是使用读写两个函数
把数据的读写划分为读写两个函数