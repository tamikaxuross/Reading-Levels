package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tamikaross.quizassessment.models.User;
import org.tamikaross.quizassessment.models.UserQuiz;

import java.util.List;

public interface UserQuizRepository extends JpaRepository<UserQuiz, Long> {
    List<UserQuiz> findByUser(User user);
}