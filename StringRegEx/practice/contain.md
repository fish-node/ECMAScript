问： 如何判断一个字符串包含另一个字符串？

解析：

1. 字符串相关API

- String.prototype.indexOf ( searchString [ , position ] )
第position个位置后，第一个searchString的索引

- String.prototype.lastIndexOf ( searchString [ , position ] )
第position个位置后，最后一个searchString的索引

- String.prototype.includes ( searchString [ , position ] )
第position个位置后，是否包含searchString

2. 正则相关API
- String.prototype.test ( regexp )
The test() method executes a search for a match between a 
regular expression and a specified string. Returns true 
or false.

- String.prototype.search（ regexp )
返回符合要求的子字符串的第一个索引

- String.prototype.match( regexp)
如果regexp是全局的，就找到所有符合要求的子字符串，
否则只找第一个符合要求的




# How to check if a string “startsWith” another string?

- String.prototype.startsWith ( searchString [ , position ] )

# How to check if a string “endsWith” another string?