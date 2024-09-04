package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;

@Entity
@Table(name = "quizoption")
public class QuizOption {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long optionId;

    private String optionText;
    private boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "question_id")
    private Question question;

    // Getters and setters
}
