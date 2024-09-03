package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tamikaross.quizassessment.models.Quiz;

import java.util.List;

public interface QuizRepository extends JpaRepository<Quiz, Long> {
    List<Quiz> findByTitleContaining(String title);
}