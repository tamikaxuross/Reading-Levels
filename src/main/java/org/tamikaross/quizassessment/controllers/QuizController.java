package org.tamikaross.quizassessment.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.tamikaross.quizassessment.models.Quiz;
import org.tamikaross.quizassessment.services.QuizService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/quiz")
public class QuizController {

    private final QuizService quizService;

    @Autowired
    public QuizController(QuizService quizService) {
        this.quizService = quizService;
    }

    // Get all quizzes
    @GetMapping
    public ResponseEntity<List<Quiz>> getAllQuizzes() {
        List<Quiz> quizzes = quizService.getAllQuizzes();
        return ResponseEntity.ok(quizzes);
    }

    // Get a quiz by ID
    @GetMapping("/{quizId}")
    public ResponseEntity<Quiz> getQuiz(@PathVariable Long quizId) {
        Optional<Quiz> quiz = quizService.getQuizById(quizId);
        return quiz.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new quiz
    @PostMapping
    public ResponseEntity<Quiz> createQuiz(@RequestBody Quiz quiz) {
        Quiz savedQuiz = quizService.saveQuiz(quiz);
        return ResponseEntity.ok(savedQuiz);
    }

    // Update an existing quiz
    @PutMapping("/{quizId}")
    public ResponseEntity<Quiz> updateQuiz(@PathVariable Long quizId, @RequestBody Quiz updatedQuiz) {
        Optional<Quiz> existingQuiz = quizService.getQuizById(quizId);

        if (existingQuiz.isPresent()) {
            updatedQuiz.setQuizId(quizId); // Ensure the ID remains unchanged
            Quiz savedQuiz = quizService.saveQuiz(updatedQuiz);
            return ResponseEntity.ok(savedQuiz);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Delete a quiz
    @DeleteMapping("/{quizId}")
    public ResponseEntity<Void> deleteQuiz(@PathVariable Long quizId) {
        Optional<Quiz> quiz = quizService.getQuizById(quizId);
        if (quiz.isPresent()) {
            quizService.deleteQuiz(quizId);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
