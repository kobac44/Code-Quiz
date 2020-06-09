//select all elements
const startEl = document.querySelector("#start-btn");
const questionsEl = document.querySelector("#questions");
const correctAnswersEl = document.querySelector("#answers");
const choiceListEl = document.querySelector("#list");
const timerEl = document.querySelector("#timer");
const counterEL = document.querySelector("#counter");
const mouseEventsEl = document.querySelector("#click-events");
const choiceA = document.querySelector("A");
const choiceB = document.querySelector("B");
const choiceC = document.querySelector("C");
const correctAnswerEl = document.querySelector("#answer");
const quizContainer = document.querySelector('#quiz');
const resultsContainer = document.querySelector('#results');
const submitButton = document.querySelector('#submit');

function buildQuiz() { }

function showResults() { }

//start qiuz
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

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
    }
];
