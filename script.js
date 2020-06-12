//Variables
const startButton = document.querySelector("#startButton");
const questionsEl = document.querySelector("#questions");
const correctAnswersEl = document.querySelector("#answers");
const scoreListEl = document.querySelector("#scores");
const timer = document.querySelector("#time");
const counterEL = document.querySelector("#counter");
const choiceA = document.querySelector("A");
const choiceB = document.querySelector("B");
const choiceC = document.querySelector("C");
const choiceD = document.querySelector("D");
const correctAnswerEl = document.querySelector("#answer");
const resultsContainer = document.querySelector("#results");
const submitButtonEl = document.querySelector("#submit");
let secondsLeft = 75;
const storedScores = document.querySelector("scorelist");
const backButton = document.querySelector("#go-back");
const clearScores = document.querySelector("#clear-highscores");
let highScoreList = v
const messageDiv = document.querySelector("#message");
let timerReturn = "";
let index = 0;
let user = "";

//TIMERFUNCTION;
function time() {
  secondsLeft--;

  if (secondsLeft <= 0) {
    secondsLeft = 0;
  }

  timer.textContent = secondsLeft;
}

//START TIMER FUNCTION
function startTime() {
  let timerInterval = setInterval(time, 1000);
}

//START BUTTON
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  //Start Timer
  startTime();
  //Hide Quiz Header and Start Display

  //Start Questions
  startGame();
});

function startGame() {
  alert("start game");
}
//question, end game quiz
//function that goes through the array, grab data from the question to build the elements on the page.
// need to
// create the questions
const questions = [
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

