function foo(obj){
    with(obj){
        a=2;
    }
}

var o1={
    a: 3,
}

var o2={
    b:3,
}

foo(o1);
console.log(o1.a);  //2

foo(o2);
console.log(o2.a); //由于o2没有a变量，所以a被声明为了全局变量，并且值被设置为2
console.log(a); //验证上述猜想

console.log(o1.a);
o1.a=3; //目的：测试a变量是否真的成为了全局变量。如果是，则下一句不会是3

console.log(a);
console.log(o2.a);