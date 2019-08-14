// for(var i=1;i<=5;i++){
//     setTimeout(function timer(){
//         console.log(i);     //预期结果：隔1秒输出1，然后隔2秒输出2，隔3秒输出3，···     //正确结果：每隔1秒输出6，一共输出5个
//     },i*1000);
// }
// 循环中，所有的函数都被封闭在一个共享的全局作用域中，即实际上只有一个i

//如何得到预期结果呢？
//探索1：

// for(var i=1;i<=5;i++){
//     (function(){
//         setTimeout(function timer(){
//             console.log(i);     //预期结果：隔1秒输出1，然后隔2秒输出2，隔3秒输出3，···     //正确结果：每隔1秒输出6，一共输出5个
//         },i*1000);  //拿到一个匿名函数的闭包
//     })();
// }

//探索2:

// for(var i=1;i<=5;i++){
//     (function(){
//         var j=i;
//         setTimeout(function timer(){
//             console.log(j);     //预期结果：隔1秒输出1，然后隔2秒输出2，隔3秒输出3，···     //正确结果：隔1秒输出1，再隔1秒输出2，···
//         },j*1000);  //拿到一个匿名函数的闭包, 让匿名函数有自己的变量，或者说让j来传递i变量的值
//     })();
// }
// for(var i=1;i<=5;i++){
//     (function(j){
//         setTimeout(function timer(){
//             console.log(j);     //预期结果：隔1秒输出1，然后隔2秒输出2，隔3秒输出3，···     //正确结果：隔1秒输出1，再隔1秒输出2，···
//         },j*1000);  //拿到一个匿名函数的闭包, 让匿名函数有自己的变量
//     })(i);
// }//对上面的函数的改进,结果一致

//探索3:

// for(var i=1;i<=5;i++){
//     (function(j){
//         setTimeout(function timer(){
//             console.log(j);  //正确结果：隔1秒输出1，然后输出1-5，然后再以1秒间隔输出2-5
//         },1000);  //拿到一个匿名函数的闭包, 让匿名函数有自己的变量
//     })(i);
// }//对上面的函数的改进

//探索4:

for(let i=1;i<=5;i++){
    setTimeout(function timer(){
        console.log(i);     //预期结果：隔1秒输出1，然后隔2秒输出2，隔3秒输出3，···     //正确结果：以1秒的间隔输出1，2，3，4，5
    },i*1000);
}