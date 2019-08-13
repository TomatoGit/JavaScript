function foo(str,a){
    eval( str); //欺骗！
    console.log(a,b);
}
let b=2;

foo("let b=3",1);   //1,3