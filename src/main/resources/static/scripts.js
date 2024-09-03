document.addEventListener('DOMContentLoaded', () => {
    const quizId = 1; // Replace with dynamic ID or get from URL parameters
    fetchQuiz(quizId);
});

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
