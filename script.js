'use strict';
/* Take the  value from input box,and check if it a actual value between 1-20 */

//highscore
let highScore = Number(document.querySelector('.highscore').textContent);
//Score
let score = Number(document.querySelector('.score').textContent);
//Random Number
let secretNumber = Math.round(Math.random() * 20) + 1;

//Function for decreasing a score
let testFunc = () => {
  if (score > 0) {
    score = Number((document.querySelector('.score').textContent -= 1));
  }
};

//Logic
document.querySelector('.check').addEventListener('click', function () {
  let inputValue = Number(document.querySelector('.guess').value);
  //Check if the number is actual(not 0)

  if (inputValue === 0) {
    document.querySelector('.message').textContent =
      'Type the number from 1-20';
    //Chech if input is greater than Secret Number!!!
  } else if (inputValue > secretNumber) {
    document.querySelector('.message').textContent = 'Too High!';
    //check if the score greater or equal to zero
    testFunc();

    //Check if input is less than Secret Number!!!
  } else if (inputValue < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low!';
    //check if the score greater or equal to zero
    testFunc();

    // Check if the player guess the Secret Value
  } else {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.fontSize = '7rem';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.message').textContent = 'You WIN!!!';
    highScore = Number(
      (document.querySelector('.highscore').textContent = score)
    );
  }
});
//Reset Button

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.highscore').textContent = '0';
  secretNumber = Math.round(Math.random() * 21) + 1;
});
