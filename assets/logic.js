var currentQuestionIndex = 0;
var startButton = document.getElementById("start");
var choicesEl = document.getElementById("choices");
var questionsEl = document.getElementById("questions");
var feedbackEl = document.getElementById("feedback");

function startQuiz() {
    // Timer Code
    getQuestion();
}

function getQuestion() {

    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(function (choice, i) {
        var optionButton = document.createElement("button");
        optionButton.setAttribute("class", "choice");
        optionButton.setAttribute("value", choice)
        optionButton.textContent = choice;
        optionButton.onclick = answerClick;
        choicesEl.appendChild(optionButton);
    })
}

function answerClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        feedbackEl.textContent = "Wrong."
    }
    else {
        feedbackEl.textContent = "Right"
    }
    // flash right/wrong feedback on page for half a second
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        console.log("hello")
        feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);

    currentQuestionIndex++

    if (currentQuestionIndex === questions.length) {
        endGame();
    } else {
        getQuestion();
    }
}

function endGame() {
    feedbackEl.textContent = "game over"
    choicesEl.textContent = "Your Final Score is "
    var submitBtn = document.createElement("button")
    submitBtn.setAttribute("class", "submit");
}

startButton.onclick = startQuiz;