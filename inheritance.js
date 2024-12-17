/*class GrandParent{
    property(){
        console.log("this is whole property ");
        
    }
}
class Parent extends  GrandParent{
    properties(){
        console.log("this is parent property -- land");
        
    }
}
//let prty = new Parent();// object creation syntax----> [variable name] [reference name] = new [class name]();
                        // function call syntax ----> [reference name] . [function name]();
//prty.properties();

class Child extends Parent{
    asset(){
        console.log('thos is child property -- bike');
        
    }*/
//}
//let ast = new Child();
//ast.asset();  // child
//ast.properties(); // parent
//ast.property(); // grand parent

class Parent{
    constructor(){
        console.log("this is parent property -- land");
        
    }
}

class Child extends Parent{
    constructor(){
        super();//it is a keyword used for parent class reference
        console.log('this is child property -- bike');
        
    }
}
let ast = new Child();