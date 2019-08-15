function identify(){
    return this.name.toUpperCase(); //函数可以自动引用合适的上下文对象
}

function speak(){
    var greeting="Hello, I'm "+identify.call(this);
    console.log(greeting);
}

var me={
    name:"Chenfan",
}

var you={
    name:"Raion",
}

identify.call(me);  //CHENFAN
identify.call(you); //RAION

speak.call(me); //Hello, I'm CHENFAN
speak.call(you); //Hello, I'm RAION
