//select all elements
const startEl = document.querySelector("#startSbtn");
const questionsEl = document.querySelector("#questions");
const correctAnswersEl = document.querySelector("#answers");
const scoreListEl = document.querySelector("#scores");
const timerEl = document.querySelector("#timer");
const counterEL = document.querySelector("#counter");
const ChoicesEl = document.querySelector("answers");
const choiceA = document.querySelector("A");
const choiceB = document.querySelector("B");
const choiceC = document.querySelector("C");
const choiceD = document.querySelector("D");
const correctAnswerEl = document.querySelector("#answer");
const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitButtonEl = document.querySelector("#submit");
const secondsLeft = questions.length * 15 + 1;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Out of Time");
      questions = {};
    } else if (i === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
  return score;
}

function questionSetter() {
  answerChoiceA.hidden = false;
  answerChoiceB.hidden = false;
  answerChoiceC.hidden = false;
  answerChoiceD.hidden = false;
  document.getElementById("startQuizButton").hidden = true;
  if (i === questions.length) {
    questions();
  } else {
    document.getElementById("question").textContent = questions[i]["title"];
    document.getElementById("answerOne").textContent =
      questions[i]["choices"][0];
    document.getElementById("answerTwo").textContent =
      questions[i]["choices"][1];
    document.getElementById("answerThree").textContent =
      questions[i]["choices"][2];
    document.getElementById("answerFour").textContent =
      questions[i]["choices"][3];
  }
}

function storeScores(highScoreText) {
  tempArray = JSON.parse(localStorage.getItem("scores"));
  if (tempArray === null) {
    scoreList.push(highScoreText);
    localStorage.setItem("scores", JSON.stringify(scoreList));
  } else {
    tempArray.push(highScoreText);
    localStorage.setItem("scores", JSON.stringify(tempArray));
  }
}

// create the questions
const myQuestions = [
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

document
  .getElementById("startButton")
  .addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
  messageDiv.textContent = "";
});
