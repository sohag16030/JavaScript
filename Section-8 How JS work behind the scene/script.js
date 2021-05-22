'use strict';

/* scope chain */
//const and let are blocked scoped
//function are also bloced scoped
//var is function scoped

/* function calcAge(birthYear){
  const age =2037-birthYear;
  function printAge(){
    const output = `${firstName} You are ${age} years old, born in ${birthYear}`;
    console.log(output);
    if(birthYear=>1981 && birthYear<=1996){
      var test = `i am function var type variable`
      const str = `Oh, and you are a milleniar,${firstName}`;
      function add(a,b){
        return a+b;
      }
      console.log(str);
      console.log(add(2,4));
    }
       console.log(test);
      
  }
  printAge();
  return age;
}
const firstName = 'Jonas'
console.log(calcAge(1992)); */

//Hosting in JavaScript
//Regular function vs Arrow Funciton

/* var firstName = `Matella`
const jonas = {
  firstName : 'Jonas',
  year :1991,
  calcAge : function(){
       console.log(this);
       console.log(2037-this.year);
       
       const IsMillenial = function(){
        console.log(this.year>=1981 && this.year<=1996)    
    };
    IsMillenial();
  },
   greet: ()=>console.log(`Hey ${this.firstName}`),
   
};

jonas.greet();
console.log(firstName); */
//Arrow keyword inherite <this> keyword from its parent scope but regular function can't


//Premitive and Objective [Lec : 99]

/* let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name :'Jonas',
  age : 30
}
const friend = me;
friend.age = 27;
console.log('Friend:',friend);
console.log('Jonas:',me); */

//Primitive and Objective practice

let lastName ='Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName,oldLastName);

const jessica = {
  firstName : 'Jessica',
  lastName : 'williams',
  age : 27,
}   
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before marriage:`,jessica);
console.log(`After marriage:`,marriedJessica);











