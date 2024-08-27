package org.tamikaross.quizassessment.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.tamikaross.quizassessment.models.User;
import org.tamikaross.quizassessment.repositories.UserRepository;


@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User createUser(String username, String email, String password) {
        User user = new User();
        user.setUsername(username);
        user.setEmail(email);
        user.setPassword(password);

        return userRepository.save(user);
    }

    // Other service methods
}

