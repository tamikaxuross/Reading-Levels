package org.tamikaross.quizassessment.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long quizId;

    private String title;

    private String description;

    @OneToMany(mappedBy = "quiz")
    private Set<Question> questions;
}
