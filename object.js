let obj={
    name:["raj","ravi"],
    age: 5,
    gender:'male'
};
console.log(obj);
console.log(obj.gender);//accessing a single value in a object
console.log(obj['age']);//accessing a single value in a object

obj.mobile_no = 4464464646;//inserting a vale to a object
//obj.name ='ram';//updating a value from a object
delete obj.gender;//delete a value from a object
console.log(obj);


let employees = {
    name : ['raj','eshwar','sanjay','ajay'],
    age : [15,20,24,26],
    id : [1,2,3,4]
};
console.log(employees);
console.log('name:',employees.name[0],'age:',employees.age[0],'id:',employees.id[0]);



let person={
    name : 'siva',
    age : 20,
    role:'developer',
    sayhello : function(){
        console.log('hi this is',this.name);
        
    }
};
person.sayhello();