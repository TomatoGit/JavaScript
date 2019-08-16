// function foo(){
//     console.log(this.a);
// }

// var obj={
//     a:2,
// }

// var bar=function(){
//     foo.call(obj);     //硬绑定
// }

// bar();  //2

// setTimeout(bar,1000);   //2

// var obj2={
//     a:3,
// }

// bar.call(obj2);     // 不可重复绑定，故结果还是2


//包裹函数

// function foo(something){
//     console.log(this.a,something);
//     return this.a+something;
// }

// var obj={
//     a:2,
// };

// var bar=function(){
//     return foo.apply(obj,arguments);    //包裹函数，负责接受参数并返回值    其中this与obj绑定
// };

// var b=bar(3);   //2 3

// console.log(b); //5

//辅助绑定函数

// function foo(something){
//     console.log(this.a,something);
//     return this.a+something;
// }

// function bind(fn,obj){  //辅助绑定函数
//     return function(){
//         return fn.apply(obj,arguments);
//     };
// }

// var obj={
//     a:2,
// };

// var bar=bind(foo,obj);

// var b=bar(3);   //2 3

// console.log(b); //5

function foo(something){
    console.log(this.a,something);
    return this.a+something;
}

var obj={
    a:2,
};

var bar=foo.bind(obj);  //内置方法

var b=bar(3);   //2 3

console.log(b); //5

//从this的绑定方面来说，call()和apply()是一样的，区别在于参数