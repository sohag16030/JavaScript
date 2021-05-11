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

function cutFruitPieces(fruit){
    return fruit*4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples pieces and ${orangePieces} oranges picees`;
    return juice;
}

console.log(fruitProcessor(2,1));