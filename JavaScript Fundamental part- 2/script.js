//Lec 31 [Activating Strict Mode]
// 1.forbides to do certain things 2.error will be visible in dev console that we had made

'use strict';
/* 
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log(`I can drive :D`);

const interface = 'Audio';// reserved word 'interface' */

//Lec 32 [Function]

/* function logger(){
    console.log(`my name is shohag`);
}

logger();// invoking/running/calling function

function fruitProcessor(apples,oranges){
    //console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const applejuice = fruitProcessor(5,0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,3);
console.log(appleOrangeJuice); */

/* const n = Number('23');
console.log(n); */

//Lec 34 [Function declations and expression]
//function declaration
/* function calcAge(bithYear){
    return 2021-bithYear;
}
const age1= calcAge(1991);

console.log(calcAge(1991));

//function expression
const calcAge2 = function(bithYear){
    return 2021-bithYear;
}

const age2 = calcAge2(1992);
console.log(age1,age2);



 */
//Lec 35 [Arrow Function]
//for one parameter
/* const calcAge3 = birthYear =>2037- birthYear;
console.log(calcAge3(1991));
//multiple parameter
 const yearsUntilRetirement = (birthYear,firstName) =>{
     const age = 2037 - birthYear;
     const retirment = 65-age;
     return `${firstName} will retired after ${retirment} years`;
 }
 console.log(yearsUntilRetirement(1991,'shahed'));
 console.log(yearsUntilRetirement(1988,'Jonas')); */

//Lec 36 [Functions calling from another function]

/* function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges picees`;
    return juice;
}

console.log(fruitProcessor(2,1)); */

//Lec 37 [Reiewing Function]
/* 
    const ageCalc=bithYear=>2021-bithYear;

const YearOfRetirement =(firstName,bithYear)=>{
        const age = ageCalc(bithYear);
        const retirment = 67 - age;
        return (`${firstName} is ${age} years old and will retire after ${retirment} years`);
}
 */
//Lec 38 [coding challange]

/* const calcAverage = (fScore,sScore,tScore)=>{
     const avg = (fScore+sScore+tScore)/2;
     return avg;
}
const checkWinner = (avgDolhins,avgKoalas)=>{
   //const winner = avgDolhins >= avgKoalas*2 ? `Dolhins win` :(avgKoalas >= avgDolhins*2 ? `Koalas win`:`NO one win`);
   const winner = avgDolhins == avgKoalas ? `Tie` :(avgDolhins>=avgKoalas*2 ? `Dolhins win`:(avgKoalas>=avgDolhins*2 ? `Koalas win` :`No one win`));
   return winner;
   
}

const avgDolhins = calcAverage(8,23,71);
console.log(avgDolhins);
const avgKoalas = calcAverage(8,23,71);
console.log(avgKoalas);
console.log(checkWinner(avgDolhins,avgKoalas)); */

//Lec 39 [Array]
//Lec 41 [Coding Challange]

/* const calcTip = bill =>{
    const tip = bill>=50 && bill<=300 ? (bill*15)/100 : (bill*20)/100;
    const totalBill = bill+tip;
    return totalBill;
}

let billArray = new Array (125,555,44);

let x;  let TotalBillArray = new Array();
for(x in billArray){
      console.log(calcTip(billArray[x]));
      console.log(calcTip(billArray[x])+billArray[x]);
      TotalBillArray.push((billArray[x])+billArray[x]);
} */

//Lec 42 [Introduction to Object]
//Lec 43 [dot/bracker notation]
/* const jonas={
    firstName : 'Jonas',
    lastName : 'Schamedman',
    age : 2037-1991,
    job: 'teacher',
    friends : ['Rasel','Sam','Peter','Michel']
}  */
//console.log(jonas);
/* console.log(jonas.lastName);//Dot 
console.log(jonas['lastName']);//bracket notation
let nameKey = 'Name';
console.log(jonas['first'+nameKey]); */

/* const interestedIn = prompt('What do you want to know about jona?choose firstName,lastName,job,age,friends?')
if(jonas[interestedIn]){
    console.log(jonas[interestedIn]);
}
else{
    console.log(`wrong Request! choose right one`);
} */
/* 
jonas.location = 'Bangladesh';
jonas['twitter'] = '@jonsschmman';

console.log(jonas.location); */

//challange
//Jonas has 3 friends and his best frind is called Rasel

//console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is called ${jonas.friends[0]}`);

//Lec 44 [Object Methods]
//Lec 45 [Coding Challange #3]

/* const MarkMillerObj = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,
    calcBMI : function(){
         const MarkBMI = this.mass /(this.height*this.height);
       return MarkBMI;
    }
}

const JohnSmithObj = {
    fullName : 'John Smith',
    mass : 92,
    height : 1.95,
    calcBMI : function(){
        const JohnBMI = this.mass /(this.height*this.height);
      return JohnBMI;
   }
}

const compareBMI =(MarkMillerObj,JohnSmithObj)=>{
   return MarkMillerObj.calcBMI()> JohnSmithObj.calcBMI() ?
       `${MarkMillerObj.fullName}'s BMI(${MarkMillerObj.calcBMI()}) is higher than ${JohnSmithObj.fullName}'s (${JohnSmithObj.calcBMI()})`:
       `${JohnSmithObj.fullName}'s BMI(${JohnSmithObj.calcBMI()}) is higher than ${MarkMillerObj.fullName}'s (${MarkMillerObj.calcBMI()})`;

}

console.log(compareBMI(MarkMillerObj,JohnSmithObj));
 */

//lec 46 [loop]
//Lec 50 [Coding Challange #4]
/* 
const bills = [22,295,176,440,37,105,10,1100,86,52];

const tips = new Array();
const totals = new Array();

const calcTip = bill =>{
    return (bill>=50 && bill<=300) ? (bill*15)/100 : (bill*20)/100;
}

for(let x in bills){
    tips.push(calcTip(bills[x]));
    totals.push(bills[x]+calcTip(bills[x]));     
}

for(let i = 0;i<10;i++){
    console.log(bills[i],tips[i] ,totals[i]);
}
 */
'use strict';
var x = 23;

const calcAge = birthYear => 2037 - birthYear;
