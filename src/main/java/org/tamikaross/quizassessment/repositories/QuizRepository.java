package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.tamikaross.quizassessment.models.Quiz;

@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long> {
    Quiz findByQuizId(Long quizId);
}
