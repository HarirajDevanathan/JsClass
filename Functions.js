/*function box (a,b){
    return a+b;
};
console.log(box(50,30));*/

let lov = function(){
    let e=5;
    let f=10;
    console.log(e+f);
    
};
lov();
//functions with parameters

function addition(a,b,c){
    console.log(a+b+c)
    
};
addition(2,8,10);

//return
function any(){
    let a = 10;
    let b = 20;
    return a+b;
}
console.log(any());


// function expression
let hi = function(){
    let num1=10;
    let num2=15;
    console.log(num1+num2);
    
}
hi();

//immidiate invoke function expression

(function(x){
    console.log(x);
    
})('raja');


//arrow function ()=>{}

    let box = ()=>{console.log("hello")
    };
    box();
