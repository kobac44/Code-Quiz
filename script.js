//Variables
const startButton = document.querySelector("#startButton");
const questionsEl = document.querySelector("#question");
const correctAnswersEl = document.querySelector("#answers");
let scoreArray = localStorage.getItem("highscore");
const timer = document.querySelector("#time");
const choiceA = document.querySelector("A");
const choiceB = document.querySelector("B");
const choiceC = document.querySelector("C");
const choiceD = document.querySelector("D");
const resultsContainer = document.querySelector("#results");
const submitButtonEl = document.querySelector("#submit");
let secondsLeft = 75;
const storedScores = document.querySelector("scorelist");
const clearScores = document.querySelector("#clear-highscores");
let highScore = [];
const messageDiv = document.querySelector("#message");
let timerReturn = "";
let index = 0;
let user = "";
let checkAnswerDisplay = document.createElement("p");

// this checks if scoreArray already exists

const question = [
  {
    question: "Lionel Richie played with?",
    answers: {
      choiceA: "Jackson Five",
      choiceB: "Commodores",
      choiceC: "Brothers Johnson",
      choiceD: "Five Heartbeats",
    },
    correctAnswer: choiceB,
  },
  {
    question: "Maurice White played with?",
    answers: {
      choiceA: "Jackson Five",
      choiceB: "Commodores",
      choiceC: "Earth, Wind & Fire",
      choiceD: "Five Heartbeats",
    },
    correctAnswer: choiceC,
  },
  {
    question: "Michael Jackson played with?",
    answers: {
      choiceA: "Pointer Sisters",
      choiceB: "Jackson Five",
      choiceC: "Earth, Wind & Fire",
      choiceD: "Five Heartbeats",
    },
    correctAnswer: choiceB,
  },
  {
    question: "Diana Ross played with?",
    answers: {
      choiceA: "Pointer Sisters",
      choiceB: "Jackson Five",
      choiceC: "The Supremes",
      choiceD: "Five Heartbeats",
    },
    correctAnswer: choiceC,
  },
];

//TIMER FUNCTION
function time() {
  secondsLeft--;

  if (secondsLeft <= 0) {
    secondsLeft = 0;
  }

  timer.textContent = secondsLeft;
}

//START TIMER FUNCTION
function startTimer() {
  let timerInterval = setInterval(time, 1000);
}

//START BUTTON
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  //Start Timer
  startTimer();
});
function stopTimer() {
  clearInterval(timerReturn);
  timer.textContent = 0;
}

//question, end game quiz
//function that goes through the array, grab data from the question to build the elements on the page.
// need to
// create the questions
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  //Start Timer
  timerReturn = startTimer();
  //Hide Quiz Header and Start Display
  quizHeader.style.display = "none";
  startDisplay.style.display = "none";
  //Start Questions
  createQuestionDisplay();
});
