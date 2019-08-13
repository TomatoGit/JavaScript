var a=2;

(function foo(){
    var a=3;
    console.log(a); //测试是否会被执行。    结果：会被执行，即此处被当作是表达式了
})();

console.log(a);