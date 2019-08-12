LHS：赋值操作的目标是谁  
RHS：复制操作的源头  
例如：let a=2;  
其中a是LHS，2是RHS  
练习：  
```javascript
function foo(a){
    let b=a;
    return a+b;
}

let c=foo(2);
```
问：  
1. 找到其中所有的LHS查询。
2. 找到其中所有的RHS查询。  

答：
1. 共有三处。  
第一处是c，  
第二处是调用foo()函数时对形参a的赋值，即a变量，  
第三处是b。
2. 共四处。  
第一处，foo(2)，  
第二处，2，  
第三处，a，  
第四处，a+b。