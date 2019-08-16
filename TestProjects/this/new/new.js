function foo(a){
    this.a=a;
}
var bar=new foo(2);
console.log(bar.a);
//a=3;
console.log(a);//undefined

// a=3;//无用

// console.log(a);//无意义