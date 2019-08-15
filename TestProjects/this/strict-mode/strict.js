// function foo(){
//     "use stict";    //严格模式
//     console.log(this.a);
// }
// var a=2;

// foo();  //严格模式下，this不能将全局对象作为默认绑定，即此时this绑定undefined

//结果：undefined

function foo(){
    console.log(this.a);
}

var a=2;

(function(){
    "use strict";
    foo();  // 2        结果：undefined
})();