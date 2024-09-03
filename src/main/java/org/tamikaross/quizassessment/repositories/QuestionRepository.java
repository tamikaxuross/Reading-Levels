package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tamikaross.quizassessment.models.Question;
import org.tamikaross.quizassessment.models.Quiz;

import java.util.List;

public interface QuestionRepository extends JpaRepository<Question, Long> {
    List<Question> findByQuiz(Quiz quiz);
}