// for(var i=1;i<=5;i++){
//     setTimeout(function timer(){
//         console.log(i);
//     },i*1000);
// }
//五个6
//每隔一秒输出一个6
//原因：i在全局作用域，每次循环的setTimeout函数都在for循环结束之后再同步执行，此时i已经为6了，所以表现为每隔1秒输出一个6

// for(let i=1;i<=5;i++){
//     setTimeout(function timer(){
//         console.log(i);
//     },i*1000);
// }
//隔1秒输出1，再隔1秒输出2，···
//每次循环都会重新绑定i，即使setTimeout函数是在for循环结束之后在执行的也没关系，因为所有的函数调用的i不一样

// "use strict";
function foo(){
    console.log(this.a);
}
var a=2;
(function(){
    foo();//undefined
})();