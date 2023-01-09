# 手写方法

深拷贝

```js
function clone(data) {
  if (typeof data === "symbol") {
    return Symbol.for(data.description)
  } else if (typeof data !== "object") {
    return data
  } else if (data instanceof Array) {
    return data.map(item => clone(item))
  } else if (data.constructor === Object) {
    let res = {}
    for (let key in data) {
      res[key] = clone(data[key])
    }
    return res
  } else {
    //系统对象、自定义对象
    return new data.constructor(data)
  }
}
```

