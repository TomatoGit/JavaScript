// a=2;
// var a;
// console.log(a); //测试a是undefined还是2     //结果：2


//进一步测试：去掉var a;

// a=2;
// console.log(a); //按理说会成为全局变量    //结果：成为全局变量

//再进一步测试，函数

// foo(2); //如果和上面的一样，那么会打印2出来，否则抛出异常  //结果，打印2

// function foo(a){
//     console.log(a);
// }

//再进一步测试

// foo(2); //结果，抛出TypeError，即非法调用非函数的变量

// var foo=function bar(a){
//     console.log(a);
// }

//再进一步测试

foo(2);

function foo(a){
    console.log(a);
}

// function foo(a){
//     console.log(a+2);   //测试后面的这个声明会不会覆盖前面的声明    结果：会
// }

var foo=function(a){
    console.log(a+1);   //测试后面的这个声明会不会覆盖前面的声明    结果：不会，也不会抛出异常
}