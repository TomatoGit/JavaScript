function foo(){
    console.log("name: "+this.name);
}

var obj={name:"obj"},
    obj1={name:"obj1"},
    obj2={name:"obj2"};

var fooOBJ=foo.softBind(obj);   //softBind()
//TypeError: foo.softBind is not a function

fooOBJ();   //name: obj

obj1.foo=foo.softBind(obj);
obj1.foo(); //name: obj

obj1.foo=foo.softBind(obj1);
obj1.foo(); //name: obj1

obj1.foo=foo.softBind(obj2)
obj1.foo(); //name: obj2