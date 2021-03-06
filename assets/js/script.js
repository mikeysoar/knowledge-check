var body = document.body;
var timerEl = document.getElementById('countdown');
var startBtn = document.getElementById('start');
var instructions = document.getElementById('instructions');
var challenge = document.getElementById('challenge');
var results = document.getElementById("results");
var questions = document.getElementById('questions');
var option1 = document.getElementById('option-1');
var option2 = document.getElementById('option-2');
var option3 = document.getElementById('option-3');
var option4 = document.getElementById('option-4');
var answer = document.getElementById('answer');
var score = document.getElementById('score');
var saveBtn = document.getElementById('save');
var timeInterval
var timeLeft
var userInitials = []
var highScore = document.getElementById('high-score');

var currentQuestion = 0;

challenge.style.display = "none";
results.style.display = "none";
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);

// Timer that counts down from 80 seconds
function countdown() {
    timeLeft = 80;

    timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft;
            timeLeft--;
        } else if (timeLeft <= 0) {
            clearInterval(timeInterval)
        }
    }, 1000);
}

// Coding Quiz Challenge
var questionsDB = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            "Strings",
            "Booleans",
            "Alerts",
            "numbers"
        ],
        correctAnswer: "3"
    },
    {
        question: "The condition in an if / esle statement is enclosed within ______.",
        answers: [
            "Qoutes",
            "Curly Brackets",
            "Parentheses",
            "Square brackets"
        ],
        correctAnswer: "2"
    },
    {
        question: "Arrays in JavaScript can be used to store______.",
        answers: [
            "Numbers and Strings",
            "Other arrays",
            "Booleans",
            "All of the above"
        ],
        correctAnswer: "2"
    },
    {
        question: "String values must be enclosed within _______.",
        answers: [
            "Commas",
            "Curly brackets",
            "Quotes",
            "Parentheses"
        ],
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            "JavaScript",
            "Terminal/bash",
            "For Loops",
            "Console Log"
        ],
        correctAnswer: "4"
    },
]
// score needs to be time
var score1 = 0;

//start quiz

function startGame() {

    challenge.style.display = "block";
    instructions.style.display = "none";
    DisplayQuestions();
    console.log(currentQuestion);

    var currentQuestionTitle = currentQuestion.question
    console.log(currentQuestionTitle);

}

function DisplayQuestions() {
    questions.innerText = questionsDB[currentQuestion].question
    option1.innerText = questionsDB[currentQuestion].answers[0]
    option2.innerText = questionsDB[currentQuestion].answers[1]
    option3.innerText = questionsDB[currentQuestion].answers[2]
    option4.innerText = questionsDB[currentQuestion].answers[3]
}

function checkAnswer() {
    console.log("onClick");
    var userAnswer = this.getAttribute("data-value")
    if (userAnswer === questionsDB[currentQuestion].correctAnswer) {
        score1++;
        answer.innerText = "You got it correct!";

    } else {
        answer.innerText = "You got it wrong!";
        //for every wrong answer you loose 10 seconds
        timeLeft = timeLeft - 10;
    }
    if (currentQuestion < questionsDB.length - 1) {
        currentQuestion++;
        DisplayQuestions();
    } else {
        challenge.style.display = "none";
        results.style.display = "block";
        score.textContent = "Score :" + timeLeft;
        clearInterval(timeInterval);
    }
}

function endOfGame(event) {
    var userInitialsEl = document.getElementById('user-initials').value;
    console.log(userInitials);
    var tempObj = {
        userInitialsEl,
        timeLeft,
    }
    userInitials.push(tempObj);
    for (var i = 0; i < userInitials.length; i++) {
        const liEl = document.createElement('li');
        liEl.textContent = userInitials[i].userInitialsEl + ' score: ' + userInitials[i].timeLeft
        console.log(highScore);
        highScore.appendChild(liEl);
    }
    localStorage.setItem('highScore', JSON.stringify(userInitials))
}

// save high score
function scoreBoard() {
    userInitials = JSON.parse(localStorage.getItem('highScore')) || [];
    console.log(userInitials);

    if (userInitials === null) {
        return;
    }
    userInitials.textContent = userInitials;
    score.textcontent = userInitials;
};
scoreBoard();

saveBtn.addEventListener('click', endOfGame);

startBtn.addEventListener('click', startGame);
startBtn.onclick = countdown
