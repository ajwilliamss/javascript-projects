// Select HTML elements
const input = document.querySelector(".user-input");
const btn = document.querySelector(".btn");
const output = document.querySelector(".output");
const numGuesses = document.querySelector(".num-guesses");

// Variables
let inputValue;
let guessLimit = 10;

numGuesses.textContent = guessLimit;

// Generate random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;
console.log(number);

// Function to update the input value
const updateValue = (e) => {
  inputValue = e.target.value;
  // console.log(inputValue);
};

// When user enters a number, invoke updateValue
input.addEventListener("input", updateValue);

// Function that determines if the user is correct
const guessResult = () => {
  if (inputValue == number) {
    output.textContent = `Correct! The number is ${number}.`;
    output.style.color = "green";
  } else if (inputValue > number) {
    output.textContent = "You guessed too high!";
    guessLimit--;
  } else if (inputValue < number) {
    output.textContent = "You guessed too low!";
    guessLimit--;
  } else if (isNaN(inputValue)) {
    output.textContent = "You must enter a number";
    guessLimit--;
  }

  if (guessLimit === 0) {
    output.textContent = "No more guesses, play again";
  }

  numGuesses.textContent = guessLimit;
};

// When the user clicks submit, invoke the guessResult function
btn.addEventListener("click", () => {
  // End game if no more guesses left
  if (guessLimit > 0) {
    guessResult();
    console.log(guessLimit);
  }
});

// When user clicks play again button, refresh the page
const clearVal = () => {
  window.location.reload();
};
