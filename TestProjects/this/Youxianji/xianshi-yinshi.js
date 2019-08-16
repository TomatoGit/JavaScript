function foo(){
    console.log(this.a);
}

var obj1={
    a:2,
    foo:foo,
}

var obj2={
    a:3,
    foo:foo,
}

obj1.foo();     //默认  结果：2
obj2.foo();     //默认  结果：3

obj1.foo.call(obj2); //  显示绑定    结果：3
obj2.foo.call(obj1);      //显示绑定      结果：2

//结论：显示绑定>隐式绑定