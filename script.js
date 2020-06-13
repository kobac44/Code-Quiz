//Variables
const startButton = document.querySelector("#startButton");
const questionsEl = document.querySelector("#question");
const correctAnswersEl = document.querySelector("#answers");
let scoreArray = localStorage.getItem("highscore");
const timer = document.querySelector("#time");
const choiceA = document.querySelector(`A`);
const choiceB = document.querySelector(`B`);
const choiceC = document.querySelector(`C`);
const choiceD = document.querySelector(`D`);
const resultsContainer = document.querySelector(`#results`);
const submitButtonEl = document.querySelector(`#submit`);
let secondsLeft = 75;
const storedScores = document.querySelector(`scorelist`);
const clearScores = document.querySelector(`#clear-highscores`);
let highScore = [];
const messageDiv = document.querySelector(`#message`);
let timerReturn = "";
let index = 0;
let user = "";
let checkAnswerDisplay = document.createElement("p");

// this checks if scoreArray already exists

const question = [
  {
    question: `Lionel Richie played with?`,
    answers: [
      `A. Jackson Five`,
      `B. Commodores`,
      `C. Brothers Johnson`,
      `D. Five Heartbeats`,
    ],

    correctnAswer: `B`,
  },
  {
    question: `Maurice White played with?`,
    answers: [
      `A. Jackson Five`,
      `B. Commodores`,
      `C. Earth, Wind & Fire`,
      `D. Five Heartbeats`,
    ],
    correctAnswer: `C`,
  },
  {
    question: `Michael Jackson played with?`,
    answers: [
      `A. Pointer Sisters`,
      `B. Jackson Five`,
      `C. Earth, Wind & Fire`,
      `D. Five Heartbeats`,
    ],
    correctAnswer: `B`,
  },
  {
    question: `Diana Ross played with?`,
    answers: [
      `A. Pointer Sisters`,
      `B. Jackson Five`,
      `C. The Supremes`,
      `D. Five Heartbeats`,
    ],
    correctAnswer: `C`,
  },
];

// this checks if scoreArray already exists
if (scoreArray) {
  scoreArray = JSON.parse(scoreArray);
} else {
  scoreArray = [];
}

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

//START QUIZ
/*Description: Upon user clicking Start Button,  the instructions and start button will disappear, 
the timer will begin to countdown, and the first question will display*/
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  //Start Timer
  timerReturn = startTimer();
  //Hide Quiz Header and Start Display
  quizTitle.style.display = "none";
  startDisplay.style.display = "none";
  //Start Questions
  createQuestionDisplay();
});

//Q&A FUNCTION
/*Function Description: Creates Question and Answer Area. The questions are displayed from the questions array, 
then the answers that correlate to that question are displayed as a list of buttons,so the user can choose an answer.
Once the answer is choosen the checkAnswer function determines if an answer is correct or incorrect.*/

function createQuestionDisplay() {
  let ul = document.getElementById("queA");
  const currentQ = question[index];
  let li = document.createElement("li");
  const questionh1 = document.createElement("h1");
  questionh1.textContent = currentQ.question;
  //console.log(currentQ); //Test
  li.className = "my-2";
  while (ul.hasChildNodes()) {
    ul.removeChild(ul.firstChild);
  }
  li.appendChild(questionh1);
  ul.appendChild(li);
  for (let i = 0; i < currentQ.answers.length; i++) {
    var answerChoices = currentQ.answers[i];
    var answersli = document.createElement("li");
    var button = document.createElement("button");
    button.setAttribute("value", answerChoices);
    button.textContent = answerChoices;
    button.className += "btn btn-primary my-2";
    ul.appendChild(answersli);
    answersli.appendChild(button);
    button.onclick = checkAnswer;
  }
}
//CHECK ANSWER FUNCTION
/*Function Description: Determines if the answer the user provides matches the given correct answer 
and returns "incorrect" or "correct". If incorrect,  in addition to display of "incorrect, 10 seconds are deducted 
from the timer, if correct the answer is provided, the user is displayed "correct" and the quiz continues until the timer 
displays 0 or all the questions are answered (correctly or incorrectly)*/

function checkAnswer() {
  if (this.value !== question[index].correctAnswer) {
    //console.log(this.value);
    checkAnswerDisplay.textContent = "Incorrect";
    checkAnswerDisplay.style.textAlign = "center";
    answerCheck.appendChild(checkAnswerDisplay);
    secondsLeft = secondsLeft - 10; //Time deduction
    console.log(secondsLeft); //Test
    timer.textContent = secondsLeft;
    if (secondsLeft <= 0) {
      secondsLeft = 0;
      endQuiz();
    }
  } else {
    checkAnswerDisplay.textContent = "Correct";
    checkAnswerDisplay.style.textAlign = "center";
    answerCheck.appendChild(checkAnswerDisplay);
  }
  index++;
  if (index === question.length) {
    endQuiz();
  }
  createQuestionDisplay();
}

//END QUIZ FUNCTION
/*Function Description: */
