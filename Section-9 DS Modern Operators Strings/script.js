'use strict';
//const and let are blocked scoped
//function are also bloced scoped
//var is function scoped

function calcAge(birthYear){
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
console.log(calcAge(1992));