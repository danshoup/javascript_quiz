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



var timerElement = document.querySelector("#timer-count");
var startButton = document.querySelector("#start-button");
var quizBox = document.querySelector(".questionBox");
var quizQuestions = document.querySelector("#questions");
var multipleChoice = document.querySelector("#choiceList");
var listItems = document.querySelector(".items");
var mult1 = document.querySelector("#choice1");
var mult2 = document.querySelector("#choice2");
var mult3 = document.querySelector("#choice3");
var mult4 = document.querySelector("#choice4");
var timeLeft = 76;
var score = 0;
var questionIndex = 0;
var currentQuestion = questionData[questionIndex];
var choiceData = questionData[questionIndex].choice;


// On page load init runs
function init() {
  multipleChoice.style.display = "none";
}

// Adds event listener to start quiz and timer on button click
startButton.addEventListener("click", 
// Timer function set, and stops running when reaching 0;
function() {
  startButton.style.display = "none";
  multipleChoice.style.display = "block";
  var timeInterval = setInterval(function () {
    timeLeft--;
    timerElement.textContent = timeLeft + " seconds";
    
       if (timeLeft === 0) {
      clearInterval(timeInterval);
      timerElement.textContent = "TIME'S UP!";
    }
  }, 1000);
  // Quiz questions start displaying when start button is pushed
  startQuiz();

});


function startQuiz() {
  var listButton = document.querySelectorAll(".lstBtn");
  for (i of listButton) {
    i.addEventListener("click", function(){
      console.log("it's about damn time");
    });
  }

  // Current question is the index of the question that will be displayed from the question array

  // Changes text content in the quizBox to current index question
  quizQuestions.textContent = currentQuestion.question;
  
  // Changes each list item to one of the possilbe answers for question
  mult1.textContent = "1. " + choiceData[0];
  mult2.textContent = "2. " + choiceData[1];
  mult3.textContent = "3. " + choiceData[2];
  mult4.textContent = "4. " + choiceData[3];
  
  // Changes the correct answer based on the current question array index
  var currentAnswer = currentQuestion.answer;
  console.log(currentAnswer);

}


init();
