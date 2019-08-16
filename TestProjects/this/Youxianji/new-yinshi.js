function foo(tag){
    this.a=tag;
}

var obj={
    foo:foo,
}

obj.foo(3);
console.log(obj.a); //3

var bar=new obj.foo(4); 
console.log(bar.a); //4

//结论：new>隐式