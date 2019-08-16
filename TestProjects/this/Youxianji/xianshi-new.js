function foo(tag){
    this.a=tag;
}

var obj={}

var bar=foo.bind(obj);  //内置方法，硬绑定

bar(2);
console.log(obj.a);     // 2

var baz=new bar(3);
console.log(obj.a);     //2
console.log(baz.a);     //3

//结论，在使用内置对象的硬绑定时，new的优先级更高