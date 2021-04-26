// Coding Quiz Assignment: JS Code

// Create the questions array with question, choices, and the correct answer
var questionData = [
  {
    question: "Commonly used data types DO NOT include:",
    choice: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  },
  {
    question: "The condition in an 'if/else' statement is enclosed within ____________.",
    choice: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: "3. parentheses"
  },
  {
    question: "Arrays in JavaScript can be used to store ____________.",
    choice: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4.  all of the above"
  },
  {
    question: "String vavlues must be enclosed within _______________ when being assigned to variables.",
    choice: ["1. commas", "2. curly braackets", "3. quotes", "4. parentheses"],
    answer: "3. quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choice: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console log"],
    answer: "4. console log"
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
var ansConfirm = document.querySelector(".answerConfirm");
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
    // Changes the correct answer based on the current question array index
  var currentAnswer = currentQuestion.answer;
  console.log(currentAnswer);

  var listButton = document.querySelectorAll(".lstBtn");

  for (i of listButton) {
    i.addEventListener("click", function(){
      if (this.textContent === currentAnswer) {
        console.log("CORRECT");
        ansConfirm.textContent = "That is CORRECT!"
        score+10;
        questionIndex++;
      } else {
        timeLeft-= 10;
        ansConfirm.textContent = "Sorry, that is the WRONG asnwer..."
      }
    });
  }

  // Current question is the index of the question that will be displayed from the question array

  // Changes text content in the quizBox to current index question
  quizQuestions.textContent = currentQuestion.question;
  
  // Changes each list item to one of the possilbe answers for question
  mult1.textContent = choiceData[0];
  mult2.textContent = choiceData[1];
  mult3.textContent = choiceData[2];
  mult4.textContent = choiceData[3];
  

}


init();
