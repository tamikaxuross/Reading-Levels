document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const quizId = urlParams.get('quizId');
    if (quizId) {
        fetchQuiz(quizId);
    }
});

let currentQuestionIndex = 0;
let quizData = null;

function fetchQuiz(quizId) {
    fetch(`/api/quiz/${quizId}`)
        .then(response => response.json())
        .then(data => {
            quizData = data;
            displayQuiz(quizData.question[currentQuestionIndex]); // Display the first question
        })
        .catch(error => {
            console.error('Error fetching quiz:', error);
        });
}

function displayQuiz(question) {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    if (!question || !questionTextElement || !optionsContainer) {
        console.error("Question data or DOM elements are missing.");
        return;
    }

    optionsContainer.innerHTML = '';

    questionTextElement.textContent = question.questionText; // Display question text

    question.options.forEach(option => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option.optionText;
        optionsContainer.appendChild(optionElement); // Display options
    });
}
