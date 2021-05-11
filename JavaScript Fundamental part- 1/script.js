/* // //Lec 10: values and variable

// // letters,dollarsign can use as variable name
// //variable name should not started with upper case letter

// // let js = "amizing";
// // if (js ==='amizing') alert('js is full of fun');
// // console.log(50-40);
// // let firstName = 'Shohag';
// // console.log(firstName);
// // console.log(firstName);
// // console.log(firstName);

// //Number,String,Boolean ex: let age = 23;
// //Undefined,Null ex: let children;
// //BigInt ; for larger interger that the Number can not hold.

// let javaScriptIsFun = true;
// console.log(javaScriptIsFun);

// console.log(typeof true);
// console.log(typeof javaScriptIsFun);
// console.log(typeof 23);

// // Dynamic type
// javaScriptIsFun = 'YES!';
// console.log(typeof javaScriptIsFun);

// //Undefined
// let year;
// console.log(year);
// console.log(typeof year);
// //Defined
// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// //Lec 12: let,var,const

// //let can be used for those variables that can be changed in later.
// //reassing a varible
// let ate = 30;
// age = 31;
// //const is used when value should not change in next.
// const pi = 3.1416// const variable can not be empty

// //let is block scoped and var is function scoped

// var job = 'programmer';
// job = 'teacher';

// lastName = 'SchmedTmann';
// console.log(lastName);

// //lec 14 : operators

// //math operator
// const now = 2037;

// const ageJonas = now-1991;
// const ageSarah = now -2018;
// console.log(ageJonas- ageSarah);

// console.log(ageJonas*2,ageJonas/3,2**3);

// const firstName = 'Jonas';
// console.log(firstName +' '+ lastName);

// //assignment

// let x = 10 + 5;
// x += 10; // x = x+10
// x*=4;
// x++;
// x--;
// x--;
// console.log(x);

// //comparision operator
// //math operator exe first before comparison operator
// console.log(ageJonas>ageSarah);//>,<,>=,<=,==
// console.log(ageSarah>=18);

// const isFullAge = ageSarah >=18;

// console.log(now - 1991 > now-2018);

// //Lec 15 

// let a,b;//undefined
 
// a = b = 25-10-5;//a = b = 10; 
// console.log(a,b);

// let ab = 20,bc = 30;
// let avg = ab+ bc / 2;
// console.log(avg);

//lec 16: test exam:

//  let markMass , markHeight,markBMI,johnMass,johnHeight,johnBMI;
//  markMass = window.prompt("enter mark mass:");
//  markHeight = window.prompt("enter mark Height:");
//  markBMI = markMass+ (markHeight*markHeight);
//  alert(markBMI);
//  johnMass = window.prompt("enter John mass:");
//  johnHeight = window.prompt("enter John Height:");
//  johnBMI = johnMass+ (johnHeight*johnHeight);
//  alert(johnBMI);

//  if(markBMI>johnBMI)
//  alert("markBMI is heigher then john");

//lec 17 String Template Leterals(backtick)
const firstName = 'Jonas';
const job = 'teacher';
const birthDay = 1991;
const year = 2021;

// const Jonas = "I'm "+ firstName +". I am a " + job + " and I am " + (year - birthDay) +" years old";
// alert(Jonas);

const JonasNew = `I'm ${firstName} , a ${job},${year-birthDay} years old`;
alert(JonasNew);

console.log(`Just a regulr string`);
console.log(`string with \n\
multiple\n\
lines`);
*/

//lec 18 : if-else

/* const age = 15;
const isOldEnough = age >= 18;

if(age >= 18){
    console.log(`sarah can start is driving 🚚`);
}
else{
    const yearsLeft = 18- age;
    console.log(`Sarah can start is driving after ${yearsLeft}`);
}

const birthyear = 1991;
let century ;
if(birthyear<=2000){
   century = 20;
}
else{
      century = 21;
}
console.log(century); */

//lec 19: Coding challange

//Lec 20: Type Conversion 
/* const inputYear = '1991';
console.log(Number(inputYear));//number ar pink
console.log(Number(inputYear) + 18);//string are white
console.log(Number('Jonas'));//NaN (Not a number)
console.log(String(23)); */

//Type Coercion
/* console.log(`I am `+ 23 + ` years old`);
console.log(`I am `+ '23' + ` years old`);
console.log('23' + 10 + '3'); // + convert next item to string
console.log('23' - '10' - 3); // - convert next item to Number
console.log('24'/'2');// '/ *' can convert nxt item to number
console.log('23'>'18') // > is convert item to Number

let n = '1'+ 1;
n = n -1;
console.log(n); */

//Lec 21 [truthy, falsy values]

//5 falsy values: 0,'',undefined,null,NaN,false
// truthy values : any number that can convert into true

/* console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({})); */

/* const money = 110 ;
if(money){
    console.log("Don't spend it at all");
}
else{
    console.log("you should get a job");
}
 */

/* let height = 0 ; //though height is defined but 0 is falsy value
if(height){
    console.log(`YEY! Height is defined`);
}
else{
    console.log(`Height is not defined`);
}
 */
//Lec 22 [Equality Operator]

/* const age = '18';
if(age === 18) // comparision operator
console.log(`you just become an adult(strict)`);

if(age == '18') // equal operator
console.log(`you just become an adult(loose)`); */
 

/* const favourite = prompt(`what's your favourite number?`);
console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) //'23' == 23 but not '23' === 23
{
    console.log(`Cool! 23 is an amizing number`);
}
else if(favourite == 7){
    console.log(` Cool! 7 is an amizing number`)
}
else{
    console.log(`23 is not amizing number`);
}

if(favourite!== 23)
console.log(`Why not 23?`); */

//Lec 23 Basic boolean and/or/not operator

//Lec 24 Logical operator
/* const hasDriverLicense = true ;//A
const hasGoodVision = true ;//B
const IsTried = false; */
/* console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision); */

//const shouldDrive = ;

/* if(hasDriverLicense && hasGoodVision && !IsTried){
console.log(`Sarah can drive a car`);
}
else{
    console.log(`Sarah can not drive a car`)
} */

//Lec 25 Coding challange

/* let avgScoreOfDolphins = (100+108+100)/3;
let avgScoreOfKoalas = (100+108+102)/3;

if(avgScoreOfDolphins>avgScoreOfKoalas && avgScoreOfDolphins>=100){
    console.log(` Winers is Dolphins, score is:${avgScoreOfDolphins}`);
}
else if(avgScoreOfDolphins<avgScoreOfKoalas && avgScoreOfKoalas>=100){
    console.log(`Winers is Koalas, score is :${avgScoreOfKoalas}`);
}
else if(avgScoreOfDolphins>=100 && avgScoreOfKoalas>=100 && avgScoreOfDolphins==avgScoreOfKoalas ){
    console.log(`OPPS!!Match is tie!!`)
}
else  {
    console.log(`No on will win the match`);
} */



/* //Lec 26 [switch case]
true , false // expression
//statement
if(2<3){
    console.log(`2 is not less then 3`)
}

console.log(`I'm ${2019-1111} years old`);//expression can insert into 

 */

//Lec 28 [tarnary operator]

//const age = 18;
/* age >= 18 ? console.log(`I can ride a bike`) :
 console.log(`I like to drink water`);

 const drink = age>=18 ? 'wine' : 'water';
 console.log(drink); */

//console.log(`I like to drink ${age>=18 ? 'wine' : 'water'}`);

//Lec 29 [coding challange]

/* let bill = 200;
let tips = (bill>=50 && bill<=300) ? (bill*15)/100 : (bill*20)/100;
console.log(tips);
let totalBill = bill + tips;

console.log(totalBill); */





























































 