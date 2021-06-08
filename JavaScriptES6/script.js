// 'use strict';
// //const and let are blocked scoped
// //function are also bloced scoped
// //var is function scoped

// /* var x = 10;
// //Here x is 10
// {
//   let x = 2;
//   //Here x is 2
// }
// //Here x is 10

// //Looping over and array
// var cars = [`BMW`, `vOLVO`,`MINI`];
// var x ;
// for (x of cars){
//   console.log(x +`\n`);
// } */
// //JavaScript classes

// /* class Cars{
//   constructor(name,year){
//   this.name = name;
//   this.year = year;
//   }
// }

// let myCars = new Cars("Ford",2014);
// console.log(myCars); */

// //JavaScript Promises

// /* let myPromise = new Promise(function(myResolve,myReject){
//   setTimeout(function(){
//     myResolve(`myResolve function is called`);},3000);
//   });
 

// myPromise.then(
//   function(value){
//     document.getElementById('demo').innerHTML = value;
// });
//  */
// //The Symbol Type
// /* const person ={
//   firstName : 'John',
//   LastName : 'Doe',
//   age : 50,
//   eyeColor:'blue'
// };

// let id = Symbol('id');
// person[id]=140353; */

// //Default Parameter Values

// /* function myFunction(x,y=10){
//   //y will be 10 if not passsed or undefined
//   return x+y;
// }
// console.log(myFunction(10));

// const mynewArrowFunction = (x,y=10)=>{
//   return x+y;
// }
// console.log(mynewArrowFunction(100)); */

// /* function Sum(...args){
//   let sum = 0;
//   for(let x of args){
//     sum+=x;
//   }
//   return sum;
// }

// console.log(Sum(1,2,3,4)); */

// /* var numbers = [4, 9, 16, 25, 29];
// var valueFind = numbers.find(myFunction);
// console.log(valueFind);
// var indexFind = numbers.findIndex(myFunction);
// console.log(indexFind); */

// /* const myFunction=(value, index, array)=>{
//   return value > 18;
// } */
// /* function myFunction(value, index, array) {
//   return value > 18;
// } */

// //New Math Methods
// /* let x = -4.9;
// console.log(Math.trunc(x));
// console.log(Math.sign(x));

// let y = 8;
// console.log(Math.cbrt(8)); */

// //The Number IsInteger Method
// /* let number = 20;let notSafeNumber =10.5;

// console.log(Number.isInteger(number));
// console.log(Number.isInteger(notSafeNumber)); */ // Safe integers are all integers from -(2^53 - 1) to  +(2^53 - 1).

// //New Global Methods
// /* console.log(isFinite(10/0));
// console.log(isFinite(10/1)); */
// //To fixed.. floating number precision
// /* let x = 7/2;
// console.log(x.toFixed(6)); */

// //NaN
// /* console.log(isNaN(`shohag`)); */

// /* console.log("object")
// console.log("object") */

// //Asynchronous javascript //blocking behaviour, callbacks,promises,async-await

// /* const ProcessOrder = ()=>{
//    console.log(`processing order for customer 1`); */
// //synchronus behaviour
// /*  var currentTime = new Date().getTime();
//    while(currentTime + 3000>=new Date.getTime());

//      console.log(`Order processed for customer 1`) */
// //Asynchronus behaviour [used WebApi/CallBackQueue]
// /*    setTimeout(() => {
//      console.log(`cooking completed`);
//    }, 3000);
// } */

// /* console.log(`take order for customer 1`);
// ProcessOrder();
// console.log(`completed order for customer 1`); */

// /* const takeOrder=(customer,callback)=>{
//   console.log(`Order taken for ${customer}`);
//   callback(customer);
  
// }
// const processOrder=(customer,callback)=>{
//   console.log(`order Processing  for ${customer}`);
//   setTimeout(() => {  
//     console.log(`Cooking Completed`);
//     console.log(`order processed  for ${customer}`);
//     callback(customer);
//   }, 3000);
 
// }
// const completeOrder =(customer)=>{
//   console.log(`Order Completed for ${customer}`);
// }
// takeOrder("Shohag",(customer)=>{
//   processOrder(customer,(customer)=>{
//     completeOrder(customer);
//   })
// }); */

// /* const  myCalculator=(a,b,callBack)=>{
//   var sum = a+b;
//   callBack(sum,10,12);
// }
// const Display=(data,x,y)=>{
//   console.log(`${data} ${x} ${y}`);
// }
// myCalculator(5,5,Display) */

// //Promise
// /* const hasMeeting = false;

// const meeting = new Promise((resolve, reject) => {
//   if (!hasMeeting) {
//     const meeingDetails = {
//       name: 'Technical meeting',
//       location: 'Google meet',
//       time: '10:00 PM',
//     };
//     resolve(meeingDetails);
//   } else {
//     reject(new Error(`meeting already created`));
//   }
// });

// meeting
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err.message);
//   });
//  */

// var hasmeeting = false;
// var meeting = new Promise((resolve, reject) => {
//   if (!hasmeeting) {
//     var meetingDetails = {
//       name: `Technical meeting`,
//       location: `google meet`,
//       time: '10:00 PM',
//     };
//     resolve(meetingDetails);
//   } else reject(`meeting already created`);
// });

// const addToCaldender = meetingDetails => {
//   const calender = `${meetingDetails.name} has been created on ${meetingDetails.location} at ${meetingDetails.time}`;
//   return Promise.resolve(calender);
// };

// meeting
//   .then(addToCaldender)
//   .then(res => {
//     console.log(res);
//   })
//   .catch(Err => {
//     console.log(Err.message);
//   });

// async function myMeeting() {
//   const meetingDetails = await meeting;
//   const calender = await addToCaldender(meetingDetails);
//   console.log(calender);
// }

// myMeeting();

// /* const promise1 = Promise.resolve(`Promise 1 is resolved`);
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Promise 2 is resolved`);
//   }, 2000);
// });

//  promise1.then(res => {
//   console.log(res);
// });
// promise2.then(res => {
//   console.log(res);
// }); 

// Promise.all([promise1,promise2]).then((res)=>{
//   console.log(res);
// })
//  */
// /* async  function friendlyFunction(){
//   return `hello`
// }
// console.log(friendlyFunction()); */



/* function sayHello (name) {
  return ()=>{
    console.log(`Hi ${name}`)
  }
}

const a = sayHello("Shohag");
a() */




