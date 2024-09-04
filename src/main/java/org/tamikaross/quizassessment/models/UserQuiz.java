package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class UserQuiz {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userQuizId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "quiz_id")
    private Quiz quiz;

    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Integer score;

    @Transient
    public String getReadingLevel() {
        if (score >= 80) {
            return "Mastery";
        } else if (score >= 60) {
            return "Advanced";
        } else {
            return "Below";
        }
    }
}
