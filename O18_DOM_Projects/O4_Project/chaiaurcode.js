// console.log(Math.random()*100 + 1);
// not 0
// for integer
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(`Random number is ${randomNumber}`);

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];

let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // valid no. or not
  // many more important in backend
  if (isNaN(guess)) {
    alert("Please enter a valid Number");
  } else if (guess < 1) {
    alert("Please enter a valid Number more then 1 ");
  } else if (guess > 100) {
    alert("Please enter a valid Number Less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 10) {
      displayGuess(guess);
      displayMessage(`Game over . Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("the Number is too LOW ");
  } else if (guess > randomNumber) {
    displayMessage("The Number is too High ");
  }
}

function displayGuess(guess) {
  // interaction with dom
  userInput.value = "";
  // clean uo of the user's input
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
  });
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game </h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
