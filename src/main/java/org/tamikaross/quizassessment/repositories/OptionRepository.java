package org.tamikaross.quizassessment.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.tamikaross.quizassessment.models.Option;

@Repository
public interface OptionRepository extends JpaRepository<Option, Long> {
}
