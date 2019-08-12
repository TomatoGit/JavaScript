## ReferenceError  
RHS查询失败时抛出的异常，类似于如下的情况。  
```javascript
function foo(a){
    console.log(a+b);   //显然b在代码执行到此处时不知道b变量，即RHS查询失败
    b=a;
}
foo(a);
```
## TypeError   
当RHS查询成功时，试图对这个变量进行非法调用，就会抛出TypeError  
#### 何为非法调用？
**例如：**  
对非函数类型的值进行函数调用，  
引用null或undefined类型的值中的属性

### 总结
Referenced同作用域判别失败相关，而TypeError则是作用域判别成功，但对结果进行了非法操作