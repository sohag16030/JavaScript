'use strict';

/* console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉Correct Number!'

document.querySelector('.number').textContent= 13
document.querySelector('.score').textContent= 10

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value); */

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value);
   if(!guess){
    document.querySelector('.message').textContent='No Number!🐱‍👤'
   }
   else if(guess === secretNumber){
     if(score>highScore)
     highScore = score;
     document.querySelector('.message').textContent='🎉Congrats !! Correct Number!'
     document.querySelector('.highscore').textContent=highScore
     document.querySelector('body').style.backgroundColor = '#60b347'
     document.querySelector('.number').style.width = '30rem'  
     document.querySelector('.number').textContent = secretNumber;
    }
    else if(guess>secretNumber || guess<secretNumber){
        if(score>0){
            document.querySelector('.message').textContent= guess>secretNumber? '🤢Number is Too high' : '🤢Number is Too low'
            
            /* if(guess>secretNumber) */
         /*    if(guess<secretNumber)
               document.querySelector('.message').textContent='🤢Number is Too low' */
        score--;
        document.querySelector('.score').textContent= score
        }
       else{
        document.querySelector('.message').textContent='😰You lost the game'
        document.querySelector('.highscore').textContent= 0
        document.querySelector('body').style.backgroundColor = '#FF0000';

       }
    }
   /*  else if(guess<secretNumber){
        if(score>0){
            document.querySelector('.message').textContent='🤢Number is Too low'
        score--;
        document.querySelector('.score').textContent= score
        }
        else{
            document.querySelector('.message').textContent='😰You lost the game'
            document.querySelector('.highscore').textContent= 0
            document.querySelector('body').style.backgroundColor = '#FF0000';
           }
    } */
});

document.querySelector('.again').addEventListener('click',function(){
   secretNumber = Math.trunc(Math.random()*20)+1;
   score = 20;
   document.querySelector('body').style.backgroundColor = '#000000';
   document.querySelector('.number').style.width = '15rem' 
   document.querySelector('.number').textContent= '?';
   document.querySelector('.guess').value= 0;
   document.querySelector('.highscore').textContent= highScore;
   document.querySelector('.score').textContent= 20; 
   document.querySelector('.message').textContent='Start guessing...'

 });


