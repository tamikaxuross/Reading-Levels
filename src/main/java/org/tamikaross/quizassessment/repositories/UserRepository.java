package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.tamikaross.quizassessment.models.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
