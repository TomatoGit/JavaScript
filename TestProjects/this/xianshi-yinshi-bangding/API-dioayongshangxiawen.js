function foo(el){
    console.log(el,this.id);
}

var obj={
    id:"awesome",
};

//forEach()函数已经把this绑定到obj上面了
[1,2,3].forEach(foo,obj);   
//1 awesome
//2 awesome
//3 awesome