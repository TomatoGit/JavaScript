// function foo(){
//     console.log(this.a);
// }

// var obj={
//     a:2,
//     foo:foo,
// }

// obj.foo();  //2,this隐式的绑定在了obj对象上     结果：2

//探索1:

// function foo(){
//     console.log(this.a);
// }
// 
// var obj2={
//     a:42,
//     foo:foo,
// }

// var obj1={
//     a:2,
//     obj2:obj2,
// }

// obj1.obj2.foo();    //this绑定在obj2上，42   //结果42

function foo(){
    console.log(this.a);
}

var obj={
    a:2,
    foo:foo,
};

var bar=obj.foo;

var a="oops, global";

bar();  //oops, global或者undefined     //结果：undefined

bar.call(obj);  //2 显示绑定