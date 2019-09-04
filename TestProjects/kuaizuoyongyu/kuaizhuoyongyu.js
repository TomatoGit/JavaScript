// var foo=true;
// if(foo){
//     var bar = foo*2;
//     console.log(bar);
// }
// bar =bar*2;
// console.log(bar);

// //js中true是1，但是不完全等于1
// //if属于全局作用域
// console.log(true===1);


for(let i=0;i<5;i++){
    setTimeout(() => {
        console.log(i);
    }, i*1000);
}
// 结果，每隔一秒分别输出0、1、2、···；  
// 解释：setTimeout函数是异步函数，for循环是单线程执行的，执行速度快于setTimeout函数，所以相当于循环执行完之后，所有setTimeout函数再同步执行