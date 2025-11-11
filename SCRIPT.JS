//---Variables---
//requirement #1: Declare variables using let or const

const totalLetters = 10;
const correctAnswer = "javascript";

let foundCount = 0; //tracks how many letters have been found
let collectLetters = ""; //stores the letters

//requirement #3: use getElementbyID()
const counterDisplay = document.getElementById("counter");
const lettersDisplay = document.getElementById("letters-display");
const answerSection = document.getElementById("answer-section");
const winnersMessage = document.getElementById("winners-message");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");

const letterButtons = document.querySelectorAll(".letter-btn");

//---functions for letter "click"---
//requirement #2: functions
//requirement #4: addEventListener
//requirement #5: if conditions/comparative operator

function firstLetterClick(event) {
  const clickedButton = event.target; //once button is clicked
  const letter = clickedButton.getAttribute("data-letter"); //get the text from the button
  if (clickedButton.classList.contains("found")) {
    //check if button already clicked
    return; //Exit function if already found
  }
  clickedButton.classList.add("found"); //add found class to button - used claude for this.🆘
  collectLetters = collectLetters + letter; //adds collected letter to str
  foundCount = foundCount + 1; //requirement #5: arithmetic operator
  counterDisplay.textContent = foundCount; // displays how many letters collected
  lettersDisplay.textContent = collectLetters; // displays str letters collected
  if (foundCount === totalLetters) {
    //check if all letters found
    answerSection.style.display = "block"; //show answer in input section
  }
}
//This was really hard, at first I did them all seperate then relaised they need to be in one function,
//reviewed with claude 🆘

//---events for buttons---
//requirement #5: loops

letterButtons.forEach(function (button) {
  button.addEventListener("click", firstLetterClick); //forEach loops through each button and add click event
});

//---function to check answer---

function checkAnswer() {
  const userAnswer = answerInput.value; //get what user input
  const userAnswerLower = userAnswer.toLowerCase(); // makes input all lowercase to match corrcet answer (if right)
  if (userAnswerLower === correctAnswer) {
    answerSection.style.display = "none"; // hide input section
    winnersMessage.style.display = "block"; //shows winner message
  } else {
    alert("Not quite! Try again.");
    answerInput.value = ""; //clears input field - used clause for this, could't figure it out 🆘
  }
}

//---function to reset game---

function resetGame() {
  foundCount = 0;
  collectLetters = "";
  counterDisplay.textContent = foundCount;
  lettersDisplay.textContent = collectLetters;
  answerInput.value = "";
  answerSection.style.display = "none";
  winnersMessage.style.display = "none";
  letterButtons.forEach(function (button) {
    button.classList.remove("found");
  }); //the above just removes everything we've done above this function.
  // This took me the longest to do, had to review it with claude 🆘
}

//---events for submit and reset buttons---
submitBtn.addEventListener("click", checkAnswer); //see 57
resetBtn.addEventListener("click", resetGame); //see 70
