
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


var currentQuestion = 0;

var message = ' All Done!';
challenge.style.display="none";
results.style.display="none";
option1.addEventListener("click", checkAnswer);
option2.addEventListener("click", checkAnswer);
option3.addEventListener("click", checkAnswer);
option4.addEventListener("click", checkAnswer);
// Timer that counts down from 80 seconds
function countdown() {
    var timeLeft = 80;

    var timeInterval = setInterval(function () {
        if (timLeft > 1) {
            timerEl.textContent = timeLeft;
            timerLeft--;
        // } else if (timLeft === 1) {
        //     timerEl.textContent = timeLeft;
        //     timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}

var body = document.body;
var h1El = document.createElement("h1");
var para = document.createElement("p");
var h3El = document.createElement("h3");


''
// h1El.textContent = "Coding Quiz Challenge";
// h1El.setAttribute('style', 'margin:auto; text-align:Center');
// body.appendChild(h1El);


// var node = document.createTextNode('Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!');
// h3El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');
// para.appendChild(node);
// var element = document.getElementById('challenge');
// element.appendChild(para);


// Coding Quiz Challenge
var questionsDB = [
    {
        question: "Commonly used data types Do NoT include:",
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
        correctAnswer: "Console Log"
    },
]

var score = 0;

//start quiz

function startGame() {

    challenge.style.display="block";
    instructions.style.display="none";
    DisplayQuestions(); 
console.log(currentQuestion);

var currentQuestionTitle = currentQuestion.question
console.log(currentQuestionTitle);
// h3El.textContent(currentQuestionTitle)
}



function DisplayQuestions() {
questions.innerText = questionsDB [currentQuestion].question
option1.innerText = questionsDB[currentQuestion].answers[0]
option2.innerText = questionsDB[currentQuestion].answers[1]
option3.innerText = questionsDB[currentQuestion].answers[2]
option4.innerText = questionsDB[currentQuestion].answers[3]

}
function checkAnswer() {
    console.log("onClick");
}


// your final score is ""
// enter intials, with the submit button

//high scores : list high scores by highest score
// add go back button and clear high scores button




startBtn.addEventListener('click', startGame);
//endQuizBtn.addEventListener('click', highScore);