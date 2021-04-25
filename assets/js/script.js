// Coding Quiz Assignment: JS Code

// Create the questions array with question, choices, and the correct answer
var questionData = [
  {
    question: "Commonly used data types DO NOT include:",
    choice: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "The condition in an 'if/else' statement is enclosed within ____________.",
    choice: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____________.",
    choice: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"
  },
  {
    question: "String vavlues must be enclosed within _______________ when being assigned to variables.",
    choice: ["commas", "curly braackets", "quotes", "parentheses"],
    answer: "quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: ["JavaScript", "terminal/bash", "for loops", "console log"],
    answer: "console log"
  },
];

// Variables



// Timer element from HTML; shows in upper right corner
var timerElement = document.querySelector("#timer-count");
// Start button shows on page load;
var startButton = document.querySelector("#start-button");
// The div for the questions and multiple choice
var quizBox = document.querySelector(".questionBox");
// The UL for the multiple choice list
var choiceList = document.querySelector(".choices");
// p container in document to display question from question array
var quizQuestions = document.querySelector("#questions");
// UL container in document to create list items from choice array
var multipleChoice = document.querySelector(".choices");
//  Variable to tell what the timer should start at
var timeLeft = 76;
// Variable to choose for starting index of questions array
var questionIndex = 2;

//  This function is called when the page loads
function init() {

}

// Adds event listener to start quiz and timer on button click
startButton.addEventListener("click", 
// Timer function set to stop running when reaching 0;
function countdown() {
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft + " seconds";
    startButton.style.display = "none";
   

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerElement.textContent = "TIME'S UP!";
    }
  }, 1000);
  // Quiz questions start displaying when start button is pushed
  startQuiz();

});

function startQuiz() {
  var currentQuestion = questionData[questionIndex];
  quizQuestions.textContent = currentQuestion.question;
  multipleChoice.textContent = currentQuestion.choice;
  console.log (questionData[4]);
}


init();