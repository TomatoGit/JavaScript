var foo=true;
if(foo){
    var bar = foo*2;
    console.log(bar);
}
bar =bar*2;
console.log(bar);

//js中true是1，但是不完全等于1
//if属于全局作用域
console.log(true===1);