'use strict';

const body = document.querySelector('body');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const userInputNumber = document.querySelector('.guess');
const secretNumber = document.querySelector('.number');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const resultMessage = document.querySelector('.message');

let scoreInNumber = 20;
let highScoreInNumber = 0;
let randomNumberGenerator = generateRandomNumber();

initialize();

checkBtn.addEventListener('click', checkGuess);
againBtn.addEventListener('click', resetGame);

function generateRandomNumber() {
  return Math.floor(Math.random() * 5 + 1);
}

function initialize() {
  score.textContent = scoreInNumber;
  highScore.textContent = highScoreInNumber;
}

function updateScore() {
  score.textContent = scoreInNumber;
}

function checkGuess() {
  const number = Number(userInputNumber.value);

  if (!number) {
    resultMessage.textContent = 'No Number Entered 🔴';
  } else if (number === randomNumberGenerator) {
    resultMessage.textContent = 'You Got It Man 🔥';
    body.style.backgroundColor = 'Green';
    secretNumber.textContent = randomNumberGenerator;
    secretNumber.style.width = '30rem';
    if (scoreInNumber > highScoreInNumber) {
      highScoreInNumber = scoreInNumber;
      highScore.textContent = highScoreInNumber;
    }
  } else {
    scoreInNumber--;
    updateScore();
    resultMessage.textContent =
      number > randomNumberGenerator
        ? 'Too High Man ... 📉'
        : 'Too Low Man ...📈';
  }
}

function resetGame() {
  userInputNumber.value = '';
  resultMessage.textContent = 'Start guessing...';
  scoreInNumber = 20;
  initialize();
  secretNumber.textContent = '?';
  body.style.backgroundColor = '#222';
  randomNumberGenerator = generateRandomNumber();
}
