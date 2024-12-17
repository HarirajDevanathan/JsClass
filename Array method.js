var a = ["hari","raj","lime"];
let b = [1,3,5,7];
a.push("juice",11);
console.log(a);
b.push(9,"raj");
console.log(b);

console.log(b.length);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift("ravi");
console.log(a);
a.splice(3,1,"mosambi");
console.log(a);
b.splice(3,3,5,3,1);
console.log(b);
console.log(a);

// let c = b.slice(2,5);
// console.log(c);

//let c = b.slice(-5,-2);
//console.log(c);

//let h = ["a","e","i"];
//let j = h.concat("o","u");
//console.log(j);

//let k = ["these are vowels-->"]
//let l = k.concat(j,h);
//console.log(l);

// let m = 'Egg is broken';
// let n = m.indexOf('E');
// console.log(n);-----> 0

// let m = 'Egg is broken';
// let n = m.indexOf('e');
// console.log(n);-----> 11

// let m = 'Egg is broken';
// let n = m.indexOf('j');
// console.log(n); -------> -1


// let p = "they have the courage to make it";
// let q = p.includes('to');------> true
// console.log(q);

// let p = "they have the courage to make it";
// let q = p.includes('To');-------> false
// console.log(q);

// let p = "they have the courage to make it";
// let q = p.includes('to',24);-------->false
// console.log(q);

// let p = "they have the courage to make it";
// let q = p.includes('to',22);
// console.log(q);-------> true

let p = "they have the courage to make it";
let q = p.includes('to',-12);
console.log(q);// -------> true


console.log(a);
// a.reverse();
// console.log(a);
// a.sort();
// console.log(a);
// let c= a.concat(1,2,3,4,5);
// console.log(c);
// c.sort();
// console.log(c);


//map
// let num = [1,2,3,4,5];
// let d = num.map((b)=>{
//     console.log(b);
//     return b+1;    
// });
// console.log(d);

// filter
let num1 = [12,25,78,54,7,15];
let num2 = num1.filter((b)=>{
      return b>18;    
});
console.log(num2);

