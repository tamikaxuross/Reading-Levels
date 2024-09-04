package org.tamikaross.quizassessment.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tamikaross.quizassessment.models.Quiz;
import org.tamikaross.quizassessment.models.UserQuiz;
import org.tamikaross.quizassessment.repositories.QuizRepository;
import org.tamikaross.quizassessment.repositories.UserQuizRepository;

import java.util.List;
import java.util.Optional;

@Service
public class QuizService {

    private final QuizRepository quizRepository;


    private UserQuizRepository userQuizRepository;

    public QuizService(QuizRepository quizRepository) {
        this.quizRepository = quizRepository;
    }

    public List<Quiz> getAllQuizzes() {
        return quizRepository.findAll();
    }

    public Optional<Quiz> getQuizById(Long quizId) {
        return quizRepository.findById(quizId);
    }

    public Quiz saveQuiz(Quiz quiz) {
        return quizRepository.save(quiz);
    }

    public void deleteQuiz(Long quizId) {
        quizRepository.deleteById(quizId);
    }

    public void saveUserQuizScore(Long userQuizId, int score) {
        Optional<UserQuiz> userQuiz = userQuizRepository.findById(userQuizId);
        if (userQuiz.isPresent()) {
            UserQuiz uq = userQuiz.get();
            uq.setScore(score);
            userQuizRepository.save(uq);
        }
    }
}
