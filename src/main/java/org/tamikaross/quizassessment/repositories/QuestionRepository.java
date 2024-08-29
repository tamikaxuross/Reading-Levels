package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.tamikaross.quizassessment.models.Question;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {
}
