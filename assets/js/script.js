var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById("#start");

var message = ' All Done!';

// Timer that counts down from 80 seconds
function countdown() {
    var timeLeft = 80;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + "seconds remaing";
            timerLeft--;
        } else if (timLeft === 1) {
            timerEl.textContent = timeLeft + "second remaing";
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
}


// Coding Quiz Challenge
var questions =[
    {
        question: "Commonly used data types Do NoT include:",
        answers: {
            1: "Strings",
            2: "Booleans",
            3: "Alerts",
            4: "numbers"
        },
        correctAnswer: "3"
    },
    {
        question: "The condition in an if / esle statement is enclosed within ______.",
        answers: {
            1: "Qoutes",            
            2: "Curly Brackets",
            3: "Parentheses",
            4: "Square brackets"
        },
        correctAnswer: "2"
    },
    {
        question: "Arrays in JavaScript can be used to store______.",
        answers: {
            1: "Numbers and Strings",
            2: "Other arrays",
            3: "Booleans",
            4: "All of the above"
        },
        correctAnswer: "2"
    },
    {
        question: "String values must be enclosed within _______.",
        answers: {
            1: "Commas",
            2: "Curly brackets",
            3: "Quotes",
            4: "Parentheses"
        },
        correctAnswer: "3"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1: "JavaScript",
            2: "Terminal/bash",
            3: "For Loops",
            4: "Console Log"
        },
        correctAnswer: "Console Log"
    },
]

var score = 0;

//try and answer he following code-related questions within the time limit. Keep in mind that incorrect answers will penilize your score/time bt ten seconds
//start quiz

function count

//commmonly used data types Do NoT include: strings, booleans, alerts, numbers

//the condition in an if / else statement is enclosed within ______. 
//answers: qoutes, culry brackets, parentheses, square brackets

//arrays in Javascript can be used to store_______. 
//Answers: numbers and strings
//other arrays(hint this is correct), booleans, all of the above

// String values must be enclosed within _____ when bing assiged variables
// answer commas, curly brackets, quotes, parentheses

//A very useful tool used duirng development and debugging for printing content to the debugger is:
// Javascript, terminal/bash, for loops, console log(this is correct)

// all done

// your final score is ""
// enter intials, with the submit button

//high scores : list high scores by highest score
// add go back button and clear high scores button




startBtn.onclick = countdown;