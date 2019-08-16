function foo(){
    console.log(this.a);
}

var a=2;

foo.call(null); //2

//如果call、apply或者bind绑定null或者undefined会被忽略，实际采用的是默认绑定

//结果：undefined

