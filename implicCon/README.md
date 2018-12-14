# 隐式类型转换

‘12’
中间有很多隐藏的类型转黄 所以不行，让人奇怪
只有阅读ECMA才能解释清楚，这是JS比较不符合常识的地方
比较坑


## 函数
- isNaN(value)
  - let v = toNumber(value)
  - return v === NaN

- isFinite(value)
  1. Let num be ? ToNumber(number).
  2. If num is NaN, +∞, or ‐∞, return false. 3. Otherwise, return true.

## 操作符
### == and ===
equal




