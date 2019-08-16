# 变量提升
变量提升发生在编译阶段，编译器会将var声明的变量和function函数声明提前  
```javascript
console.log(a); //2
var a=2;

fn();
function fn(){
    console.log("hello!")
}

console.log(k); //编译错误
let k=3;
console.log(b); //编译错误
const b=4;
```
let和const会绑定块作用域，不会变量提升（阻止变量提升的方法）