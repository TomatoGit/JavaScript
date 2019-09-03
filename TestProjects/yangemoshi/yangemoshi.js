// function foo(){
//     console.log(a);
// }
// foo();//ReferenceError
// a=2;
// console.log(a);

// "use strict";
// function foo(){
//     console.log(a);
// }
// foo();
// var a=2;

"use strict";
function foo(){
    a=2;    //ReferenceError
    console.log(a);
}
foo();
a=3;
console.log(a);