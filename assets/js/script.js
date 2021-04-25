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
var multipleChoice = document.querySelector(".choices");
var listItems = document.querySelector(".items");
var timeLeft = 76;
var questionIndex = 0;


// Adds event listener to start quiz and timer on button click
startButton.addEventListener("click", 
// Timer function set, and stops running when reaching 0;
function countdown() {
  startButton.style.display = "none";
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

function getQuestion() {
  
}


function startQuiz() {

  // Current question is the index of the question that will be displayed from the question array
  var currentQuestion = questionData[questionIndex];
  // Changes text content in the quizBox to current index question
  quizQuestions.textContent = currentQuestion.question;
  makeChoiceList();
  // Displays multiple choices from the current question index
  function makeChoiceList(choiceData) {
    var choiceData = questionData[questionIndex].choice;
    var list = document.createElement("ul");
    for (var j = 0; j < choiceData.length; j++) {
      var item = document.createElement("li");
      item.appendChild(document.createTextNode(choiceData[j]));
      list.appendChild(item);
    }
    return list;
  }
  
  quizBox.appendChild(makeChoiceList());

  console.log (currentQuestion.question);
  console.log (currentQuestion.choice);
  console.log (currentQuestion.answer);
}


