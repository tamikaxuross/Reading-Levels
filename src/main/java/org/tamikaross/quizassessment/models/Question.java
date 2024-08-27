package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Question {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    private String questionText;

    @Enumerated(EnumType.STRING)
    private QuestionType questionType;

    @ManyToOne
    @JoinColumn(name = "quizId")
    private Quiz quiz;
}
