let currentQuestionIndex = 0;
let quizData = null;

// Function to fetch quiz data by quizId
function fetchQuiz(quizId) {
    fetch(`http://localhost:8080/api/quiz/${quizId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            quizData = data;
            if (quizData && quizData.questions && quizData.questions.length > 0) {
                displayQuiz(quizData.questions[currentQuestionIndex]);
            } else {
                console.error("No questions found for this quiz.");
            }
        })
        .catch(error => {
            console.error('Error fetching quiz:', error);
            alert("Failed to load quiz. Please try again later.");
        });
}

// Function to display a quiz question
function displayQuiz(question) {
    const questionTextElement = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const quizImage = document.getElementById('quiz-image');

    // Set the question text
    questionTextElement.textContent = question.questionText;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Display options for the current question
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option.optionText;
        button.className = 'option-button';
        button.addEventListener('click', () => handleOptionClick(option));
        optionsContainer.appendChild(button);
    });

    // Set a placeholder image (optional, update with logic for different images if needed)
    quizImage.src = '/images/quiz-placeholder.jpg';
}

// Function to handle option selection
function handleOptionClick(option) {
    console.log(`Selected option: ${option.optionText}`);
    // Additional logic can be added here, such as storing the user's answer
}

// Function to navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        displayQuiz(quizData.questions[currentQuestionIndex]);
    } else {
        alert("This is the last question.");
    }
}

// Function to navigate to the previous question
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuiz(quizData.questions[currentQuestionIndex]);
    } else {
        alert("This is the first question.");
    }
}

// Initialize the quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    const quizId = 1; // Replace with dynamic ID or get from URL parameters if needed
    fetchQuiz(quizId);
});
