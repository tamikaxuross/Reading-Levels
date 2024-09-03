package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
public class Quiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    @NotEmpty(message = "Title cannot be empty")
    @Size(max = 255, message = "Title must be less than 255 characters")
    private String title;

    @NotEmpty(message = "Description cannot be empty")
    @Column(columnDefinition = "TEXT")
    private String description;

    @OneToMany(mappedBy = "quiz", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<Question> questions;

    @OneToMany(mappedBy = "quiz")
    private Set<UserQuiz> userQuizzes;
}