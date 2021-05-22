'use strict';
//const and let are blocked scoped
//function are also bloced scoped
//var is function scoped

/* var x = 10;
//Here x is 10
{
  let x = 2;
  //Here x is 2
}
//Here x is 10

//Looping over and array
var cars = [`BMW`, `vOLVO`,`MINI`];
var x ;
for (x of cars){
  console.log(x +`\n`);
} */
//JavaScript classes

/* class Cars{
  constructor(name,year){
  this.name = name;
  this.year = year;
  }
}

let myCars = new Cars("Ford",2014);
console.log(myCars); */

//JavaScript Promises

/* let myPromise = new Promise(function(myResolve,myReject){
  setTimeout(function(){
    myResolve(`myResolve function is called`);},3000);
  });
 

myPromise.then(
  function(value){
    document.getElementById('demo').innerHTML = value;
});
 */
//The Symbol Type
/* const person ={
  firstName : 'John',
  LastName : 'Doe',
  age : 50,
  eyeColor:'blue'
};

let id = Symbol('id');
person[id]=140353; */

//Default Parameter Values

/* function myFunction(x,y=10){
  //y will be 10 if not passsed or undefined
  return x+y;
}
console.log(myFunction(10));

const mynewArrowFunction = (x,y=10)=>{
  return x+y;
}
console.log(mynewArrowFunction(100)); */

/* function Sum(...args){
  let sum = 0;
  for(let x of args){
    sum+=x;
  }
  return sum;
}

console.log(Sum(1,2,3,4)); */

/* var numbers = [4, 9, 16, 25, 29];
var valueFind = numbers.find(myFunction);
console.log(valueFind);
var indexFind = numbers.findIndex(myFunction);
console.log(indexFind); */

/* const myFunction=(value, index, array)=>{
  return value > 18;
} */
/* function myFunction(value, index, array) {
  return value > 18;
} */

//New Math Methods
/* let x = -4.9;
console.log(Math.trunc(x));
console.log(Math.sign(x));

let y = 8;
console.log(Math.cbrt(8)); */

//The Number IsInteger Method
/* let number = 20;let notSafeNumber =10.5;

console.log(Number.isInteger(number));
console.log(Number.isInteger(notSafeNumber)); */ // Safe integers are all integers from -(2^53 - 1) to  +(2^53 - 1).

//New Global Methods
/* console.log(isFinite(10/0));
console.log(isFinite(10/1)); */
//To fixed.. floating number precision
/* let x = 7/2;
console.log(x.toFixed(6)); */

//NaN
console.log(isNaN(`shohag`));





