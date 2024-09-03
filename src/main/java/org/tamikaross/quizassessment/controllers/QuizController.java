package org.tamikaross.quizassessment.controllers;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.tamikaross.quizassessment.models.Quiz;
import org.tamikaross.quizassessment.services.QuizService;

import java.util.Optional;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizService QuizService;

    public QuizController(QuizService QuizService) {
        this.QuizService = QuizService;
    }

    @GetMapping("/{quizId}")
    public ResponseEntity<Optional<Quiz>> getQuiz(@PathVariable Long quizId) {
        Optional<Quiz> quiz = QuizService.getQuizById(quizId);
        if (quiz.isPresent()) {
            return ResponseEntity.ok(quiz);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
