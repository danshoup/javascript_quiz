// Coding Quiz Assignment: JS Code

// Create the questions array
var questionsAll = [
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
var score = 0;
var questionIndex = 0;
var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var quizQuestions = document.querySelector("#questions");
var multipleChoice = document.querySelector(".choices");
var timer; 
var timerCount;

// Adds event listener to start quiz and timer
startButton.addEventListener("click", function() {

})