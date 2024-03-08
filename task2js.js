var questions = [
    {
        question: "What is the result of 2 + 2?",
        answers: ["4", "5", "6"],
        correctAnswer: "4"
    },
    {
        question: "What is the result of 2 + 2 * 2?",
        answers: ["4", "6", "8"],
        correctAnswer: "6"
    }
];

function createQuiz() {
    var quizContainer = document.getElementById('quizContainer');
    questions.forEach(function(questionObj, index) {
        var questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = '<p>' + questionObj.question + '</p>';
        questionObj.answers.forEach(function(answer) {
            var answerInput = document.createElement('input');
            answerInput.type = 'radio';
            answerInput.name = 'q' + (index + 1);
            answerInput.value = answer;
            answerInput.classList.add('form-check-input');
            var label = document.createElement('label');
            label.textContent = answer;
            label.classList.add('form-check-label');
            var answerDiv = document.createElement('div');
            answerDiv.classList.add('form-check');
            answerDiv.appendChild(answerInput);
            answerDiv.appendChild(label);
            questionDiv.appendChild(answerDiv);
        });
        quizContainer.appendChild(questionDiv);
    });
}
// определения правильных ответов
function calculateResults() {
    var score = 0;
    questions.forEach(function(questionObj, index) {
        var selectedAnswer = document.querySelector('input[name="q' + (index + 1) + '"]:checked');
        if (selectedAnswer && selectedAnswer.value === questionObj.correctAnswer) {
            score++;
        }
    });
    return score;
}

function showResults() {
    var resultContainer = document.getElementById('result');
    var score = calculateResults();
    var resultText = 'Вы набрали ' + score + ' из ' + questions.length + ' баллов.';
    resultContainer.innerHTML = '<p>' + resultText + '</p>';
}

var finishButton = document.getElementById('bntFin');
finishButton.addEventListener('click', showResults);

createQuiz();