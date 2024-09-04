let currentQuestionIndex = 0;
let score = 0;

// Hardcoded quiz data with 15 questions
let quizData = {
    quizId: 1,
    title: "Reading Comprehension Quiz",
    description: "This quiz measures your reading capability across different grade levels.",
    questions: [
        { questionId: 1, questionText: "What is the main idea of a story about a cat and a dog becoming friends?", options: [{ optionId: 1, optionText: "The cat and dog learn to get along.", isCorrect: true }, { optionId: 2, optionText: "The cat chases the dog.", isCorrect: false }, { optionId: 3, optionText: "The dog barks at the cat.", isCorrect: false }, { optionId: 4, optionText: "The cat and dog do not get along.", isCorrect: false }] },
        { questionId: 2, questionText: "Which of these is a synonym for 'happy'?", options: [{ optionId: 1, optionText: "Sad", isCorrect: false }, { optionId: 2, optionText: "Excited", isCorrect: true }, { optionId: 3, optionText: "Angry", isCorrect: false }, { optionId: 4, optionText: "Tired", isCorrect: false }] },
        { questionId: 3, questionText: "What is the opposite of 'up'?", options: [{ optionId: 1, optionText: "Above", isCorrect: false }, { optionId: 2, optionText: "Over", isCorrect: false }, { optionId: 3, optionText: "Down", isCorrect: true }, { optionId: 4, optionText: "Beyond", isCorrect: false }] },
        { questionId: 4, questionText: "What is the theme of a story where a character learns to forgive?", options: [{ optionId: 1, optionText: "Revenge", isCorrect: false }, { optionId: 2, optionText: "Friendship", isCorrect: false }, { optionId: 3, optionText: "Forgiveness", isCorrect: true }, { optionId: 4, optionText: "Anger", isCorrect: false }] },
        { questionId: 5, questionText: "What is the purpose of a book that explains how plants grow?", options: [{ optionId: 1, optionText: "To entertain", isCorrect: false }, { optionId: 2, optionText: "To inform", isCorrect: true }, { optionId: 3, optionText: "To persuade", isCorrect: false }, { optionId: 4, optionText: "To describe", isCorrect: false }] },
        { questionId: 6, questionText: "What does the word 'magnify' mean?", options: [{ optionId: 1, optionText: "To make something smaller", isCorrect: false }, { optionId: 2, optionText: "To make something larger", isCorrect: true }, { optionId: 3, optionText: "To erase something", isCorrect: false }, { optionId: 4, optionText: "To hide something", isCorrect: false }] },
        { questionId: 7, questionText: "In a narrative, what is the climax?", options: [{ optionId: 1, optionText: "The introduction of the characters", isCorrect: false }, { optionId: 2, optionText: "The turning point of the story", isCorrect: true }, { optionId: 3, optionText: "The resolution", isCorrect: false }, { optionId: 4, optionText: "The setting description", isCorrect: false }] },
        { questionId: 8, questionText: "Which of the following is an example of a metaphor?", options: [{ optionId: 1, optionText: "The sun smiled down on us.", isCorrect: true }, { optionId: 2, optionText: "The sun is like a big orange.", isCorrect: false }, { optionId: 3, optionText: "The sun is as hot as fire.", isCorrect: false }, { optionId: 4, optionText: "The sun sets in the west.", isCorrect: false }] },
        { questionId: 9, questionText: "What is the effect of an author using first-person point of view?", options: [{ optionId: 1, optionText: "It distances the reader from the characters.", isCorrect: false }, { optionId: 2, optionText: "It creates a close connection with the narrator.", isCorrect: true }, { optionId: 3, optionText: "It makes the story less believable.", isCorrect: false }, { optionId: 4, optionText: "It confuses the reader.", isCorrect: false }] },
        { questionId: 10, questionText: "Which is the best definition of 'theme' in literature?", options: [{ optionId: 1, optionText: "The central message or insight", isCorrect: true }, { optionId: 2, optionText: "The sequence of events", isCorrect: false }, { optionId: 3, optionText: "The background information", isCorrect: false }, { optionId: 4, optionText: "The setting of the story", isCorrect: false }] },
        { questionId: 11, questionText: "Which of the following sentences is an example of irony?", options: [{ optionId: 1, optionText: "A fire station burns down.", isCorrect: true }, { optionId: 2, optionText: "The sun sets in the east.", isCorrect: false }, { optionId: 3, optionText: "The cat chased the mouse.", isCorrect: false }, { optionId: 4, optionText: "It rained on a rainy day.", isCorrect: false }] },
        { questionId: 12, questionText: "What is the purpose of a rhetorical question?", options: [{ optionId: 1, optionText: "To get an answer from the audience", isCorrect: false }, { optionId: 2, optionText: "To emphasize a point", isCorrect: true }, { optionId: 3, optionText: "To confuse the reader", isCorrect: false }, { optionId: 4, optionText: "To provide information", isCorrect: false }] },
        { questionId: 13, questionText: "What is the purpose of a thesis statement in an essay?", options: [{ optionId: 1, optionText: "To summarize the entire essay", isCorrect: false }, { optionId: 2, optionText: "To state the main argument or point", isCorrect: true }, { optionId: 3, optionText: "To introduce background information", isCorrect: false }, { optionId: 4, optionText: "To provide a conclusion", isCorrect: false }] },
        { questionId: 14, questionText: "In a research paper, what is the significance of a literature review?", options: [{ optionId: 1, optionText: "To summarize the research methods", isCorrect: false }, { optionId: 2, optionText: "To provide a history of the topic", isCorrect: false }, { optionId: 3, optionText: "To evaluate previous research on the topic", isCorrect: true }, { optionId: 4, optionText: "To present the results", isCorrect: false }] },
        { questionId: 15, questionText: "What is the purpose of using a counterargument in persuasive writing?", options: [{ optionId: 1, optionText: "To weaken the essay", isCorrect: false }, { optionId: 2, optionText: "To anticipate objections and address them", isCorrect: true }, { optionId: 3, optionText: "To confuse the reader", isCorrect: false }, { optionId: 4, optionText: "To make the essay longer", isCorrect: false }] }
    ]
};

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

    // Set a placeholder image (optional update with logic for different images if needed)
    quizImage.src = '/images/quiz-placeholder.jpg';
}

// Function to handle option selection
function handleOptionClick(option) {
    if (option.isCorrect) {
        score++;
    }
    nextQuestion();
}

// Function to navigate to the next question
function nextQuestion() {
    if (currentQuestionIndex < quizData.questions.length - 1) {
        currentQuestionIndex++;
        displayQuiz(quizData.questions[currentQuestionIndex]);
    } else {
        showResults();
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

// Function to display the quiz results
function showResults() {
    const percentage = (score / quizData.questions.length) * 100;
    let readingLevel = "";

    if (percentage >= 90) {
        readingLevel = "College Level";
    } else if (percentage >= 70) {
        readingLevel = "High School Level";
    } else if (percentage >= 50) {
        readingLevel = "Middle School Level";
    } else {
        readingLevel = "Elementary Level";
    }

    const resultsContainer = document.getElementById('quiz-section');
    resultsContainer.innerHTML = `
        <h2>Your Score: ${score}/${quizData.questions.length}</h2>
        <p>Percentage: ${percentage.toFixed(2)}%</p>
        <p>Reading Level: ${readingLevel}</p>
        <button onclick="location.reload()">Try Again</button>
    `;
}

// Initialize the quiz on page load
document.addEventListener('DOMContentLoaded', () => {
    displayQuiz(quizData.questions[currentQuestionIndex]);
});
