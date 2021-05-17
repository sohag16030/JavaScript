'use strict';
/* const calcAge = birthYear => 2031 - birthYear;
console.log(calcAge(1930)); */

var arr = [17, 21, 23, 25];
console.log(printForecast(arr));

let x = 10;
let y = 100;
let sum = x + y;

function printForecast(params) {
  let ans = '';
  for (let i = 0; i < params.length; i++) {
    ans = ans + `${params[i]}ºC in ${i + 1} days....`;
  }
  return ans;
}
