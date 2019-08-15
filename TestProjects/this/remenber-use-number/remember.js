// function foo(num){
//     console.log("foo: "+num);
//     this.count++;
// }
// foo.count=0;

// var i;
// for(i=0;i<10;i++){
//     if(i>5){
//         foo(i);
//     }
// }
// //检测循环是否执行，并知道执行次数

// console.log(foo.count); //查看记录是否正确

//结果：
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// 0

//this并不指向foo内部

//探索1:

// function foo(num){
//     console.log("foo: "+num);
//     foo.count++;    //这样才会指向自己的内部
// }
// foo.count=0;

// var i;
// for(i=0;i<10;i++){
//     if(i>5){
//         foo(i);
//     }
// }
// //检测循环是否执行，并知道执行次数

// console.log(foo.count); //查看记录是否正确

//结果：
// foo: 6
// foo: 7
// foo: 8
// foo: 9
// 4

//this是函数在被调用时发生的绑定，指向什么取决于调用的位置

//探索2:

function foo(num){
    console.log("foo: "+num);
    this.count++;
}
foo.count=0;

var i;
for(i=0;i<10;i++){
    if(i>5){
        foo.call(foo,i);    //使用call()可以确保this指向函数对象本身
    }
}
//检测循环是否执行，并知道执行次数

console.log(foo.count); //查看记录是否正确

//结果同上一探索