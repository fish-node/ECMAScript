- Array.protytype
looks up it's [[prototype]]
obj.[[prototype]] === Array.prototype

- Array.isArray(obj)
  - if it is an Proxy object, return isArray(obj.[[ProxyTarget]])
  - else return isArray(obj)