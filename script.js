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
const secondsLeft = 180;
const storedScores = document.querySelector("scorelist");
const backButton = document.querySelector("#go-back");
const clearScores = document.querySelector("#clear-highscores");
const highScoreList = document.querySelector("#highScores");
const messageDiv = document.querySelector("#message");

function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Timer" + secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert("Out of Time");
      questionsEnder;
    } else if (i === questions.length) {
      clearInterval(timerInterval);
    }
  }, 1000);
  return;
}
function questionEnder() {
  const scoreTag = document.createElement("h1");
  const inputTag = document.createElement("input");
  const submitButton = document.createElement("button");
  score += secondsLeft * 0.1;
  score = score.toFixed(2);
  document.getElementById("question").textContent = "All Done!";
  answerOne.remove();
  answerTwo.remove();
  answerThree.remove();
  answerFour.remove();
  document.body.children[1].appendChild(scoreTag);
  document.getElementsByTagName("h1")[0].setAttribute("id", "score");
  document.getElementById("score").textContent = "Your Score: " + score;
  document.body.children[1].appendChild(inputTag);
  document.getElementsByTagName("input")[0].setAttribute("id", "input-field");
  submitButton.textContent = "Submit";
  document.body.children[1].appendChild(submitButton);
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var highScoreText = new Object();
    highScoreText.name = inputTag.value.trim();
    highScoreText.newScore = score;
    storeScores(highScoreText);
    window.location.href = "highScores.html";
  });
}

function questionSetter() {
  document.getElementById("startQuiz").hidden = true;
  if (i === questions.length) {
    questions();
  } else {
    document.getElementById("question").textContent = questions[i]["questions"];
    document.getElementById("answerB").textContent =
      questions[i]["choicesA"][0];
    document.getElementById("answerC").textContent =
      questions[i]["choicesB"][1];
    document.getElementById("answerB").textContent = questions[i]["choiceC"][2];
    document.getElementById("answerC").textContent = questions[i]["choiceD"][3];
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
];

document
  .getElementById("startButton")
  .addEventListener("click", questionSetter);
document.getElementById("startButton").addEventListener("click", setTime);
document.getElementById("startButton").addEventListener("click", function () {
  messageDiv.textContent = "";
});

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
