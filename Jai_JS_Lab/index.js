function Quiz(questions) {

    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

function Question(questionText, choices, answer) {
    this.questionText = questionText;
    this.answer = answer;
    this.choices = choices;
}

Quiz.prototype.isEnded = function () {
    return this.questionIndex === this.questions.length;
}

Question.prototype.isCorrectAnswer = function (userAnswer) {
    return this.answer === userAnswer;
}

Quiz.prototype.getQuestionByIndex = function () {
    return this.questions[this.questionIndex];
}

Quiz.prototype.checkOptionWithAnswer = function (answer) {
    if (this.getQuestionByIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2> Correct Answers: " + quiz.score + "<br>Percentage Scored is: " + (quiz.score / questions.length * 100) + "%" + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};




function showProgress() {

    var progress = document.getElementById('progress')
    var currentQuestionIndex = quiz.questionIndex + 1
    progress.innerText = 'Question ' + currentQuestionIndex + ' of ' + quiz.questions.length

}
let questions = [
    new Question("JavaScript supports", ["Functions", "XHTML", "CSS", "HTML"], "Functions"),
    new Question("Which language is used for styling web pages?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is not a JavaScript Framework?", ["React", "JQuery", "Django", "NodeJS"], "Django"),
    new Question("Which is used for Connect To Database?", ["PHP", "HTML", "JS", "All"], "PHP"),
    new Question("JavaScript is a ", ["Language", "Programming Language", "Development", "All"], "Programming Language")
];

function handleOptionButton(id, choice) {

    var button = document.getElementById(id);

    button.addEventListener('click', function () {

        button.setAttribute("style", "background-color:red;")
        quiz.checkOptionWithAnswer(choice);
        loadQuestions();
    })
}


function loadQuestions() {


    if (quiz.isEnded()) {
        showScores();
    } else {       
        var question = document.getElementById("question");
        question.innerText = quiz.getQuestionByIndex().questionText;
   
        var choices = quiz.getQuestionByIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var choice = document.getElementById("choice" + i);
            choice.innerText = choices[i];

        }
        showProgress();
    }
};


function addEventListeners() {

    var button1 = document.getElementById('btn0')
    var userAnswer = ""

    button1.addEventListener('click', function () {
        button1.setAttribute("style", "background-color:red;")
        button2.setAttribute("style", "background-color:blue;")
        button3.setAttribute("style", "background-color:blue;")
        button4.setAttribute("style", "background-color:blue;")
        userAnswer = button1.innerText;

    })

    var button2 = document.getElementById('btn1')
    button2.addEventListener('click', function () {
        button2.setAttribute("style", "background-color:red;")
        button1.setAttribute("style", "background-color:blue;")
        button3.setAttribute("style", "background-color:blue;")
        button4.setAttribute("style", "background-color:blue;")
        userAnswer = button2.innerText;

    })

    var button3 = document.getElementById('btn2')
    button3.addEventListener('click', function () {
        button3.setAttribute("style", "background-color:red;")
        button1.setAttribute("style", "background-color:blue;")
        button2.setAttribute("style", "background-color:blue;")
        button4.setAttribute("style", "background-color:blue;")
        userAnswer = button3.innerText;

    })


    var button4 = document.getElementById('btn3')
    button4.addEventListener('click', function () {
        button4.setAttribute("style", "background-color:red;")
        button1.setAttribute("style", "background-color:blue;")
        button2.setAttribute("style", "background-color:blue;")
        button3.setAttribute("style", "background-color:blue;")
        userAnswer = button4.innerText;

    })


    button5 = document.getElementById('btn4')
    button5.addEventListener('click', function () {

        quiz.checkOptionWithAnswer(userAnswer);
        loadQuestions();
        button1.setAttribute("style", "background-color:blue;")
        button2.setAttribute("style", "background-color:blue;")
        button3.setAttribute("style", "background-color:blue;")
        button4.setAttribute("style", "background-color:blue;")


    })


}

let quiz = new Quiz(questions);

loadQuestions();
addEventListeners();