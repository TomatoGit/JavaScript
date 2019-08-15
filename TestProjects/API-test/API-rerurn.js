var foo=(function CloudModule(id){
    function change(){
        publicAPI.f=f2;
    }
    function f1(){
        console.log(id);
    }

    function f2(){
        console.log(id.toUpperCase());
    }

    var publicAPI ={
        f:f1,
        change:change,
    };
    
    return publicAPI;
})("foo Module");

foo.f();    //foo Module
foo.change();   //f->f2
foo.f();    //FOO MODULE