```JavaScript
for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}
```
结果，每隔一秒分别输出0、1、2、···；  
解释：setTimeout函数是异步函数，for循环是单线程执行的，执行速度快于setTimeout函数，所以相当于循环执行完之后，所有setTimeout函数再同步执行