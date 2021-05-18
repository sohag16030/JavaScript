'use strict';
//selecting element
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')

const diceEl = document.querySelector('.dice');
const winEl = document.querySelector('.winner');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//slecting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0,0];
let currentScore = 0;
let activePlayer = 0;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1:0
    player0El.classList.toggle('player--active')
    player1El.classList.toggle('player--active')
}

//Rolling dice functionality

btnRoll.addEventListener('click',function(){
    //1.Generating a random dice roll
     const dice =Math.trunc(Math.random()*6) + 1;
     //console.log(dice);
    //2.Display dice
     diceEl.classList.remove('hidden');
     diceEl.src = `dice-${dice}.png`;
    //3. Check for rolled 1
      if(dice!=1){
          //add dice to current score
         currentScore+=dice;
         document.getElementById(`current--${activePlayer}`).textContent = currentScore;
         //current0El.textContent = currentScore;//change later
     
      }
      else{
           //switch to next player
          switchPlayer();
      }

});
btnHold.addEventListener('click',function(){
    //1.Add current score to active player's score
     scores[activePlayer] += currentScore; 
     document.getElementById(`score--${activePlayer}`).textContent =  scores[activePlayer];

    //2.Check if player's score is >=100
    if(scores[activePlayer]>=10){
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        winEl.classList.remove('hidden');
        winEl.src = `winner.png`;
        diceEl.classList.add('hidden');
    }
    //3.switch to the next player
    else{
    switchPlayer();   
    }
});
btnNew.addEventListener('click',function(){

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    winEl.classList.add('hidden');
    diceEl.classList.remove('hidden');
    diceEl.src = `play.png`;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    scores = [0,0];
    currentScore = 0;
});