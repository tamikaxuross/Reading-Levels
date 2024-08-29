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
            displayQuiz(quizData.questions[currentQuestionIndex]);
        })
        .catch(error => {
            console.error('Error fetching quiz:', error);
        });
}

function displayQuiz(question) {
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');

    questionText.textContent = question.text; // Display the current question
    optionsContainer.innerHTML = ''; // Clear previous options

    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.innerHTML = `
            <input type="radio" name="option" value="${option.id}">
            <label>${option.text}</label>
        `;
        optionsContainer.appendChild(optionElement);
    });

    // Update the previous and next buttons' states
    document.getElementById('prev-btn').disabled = currentQuestionIndex === 0;
    document.getElementById('next-btn').disabled = currentQuestionIndex === quizData.questions.length - 1;
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuiz(quizData.questions[currentQuestionIndex]);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        displayQuiz(quizData.questions[currentQuestionIndex]);
    }
}
