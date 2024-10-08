package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "quizoption")
public class Option {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long optionId;

    private String optionText;

    private boolean isCorrect;

    @ManyToOne
    @JoinColumn(name = "question_Id")
    private Question question;
}
