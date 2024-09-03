package org.tamikaross.quizassessment;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.tamikaross.quizassessment.models.Quiz;
import org.tamikaross.quizassessment.repositories.QuizRepository;
import org.tamikaross.quizassessment.services.QuizService;
//happy
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class QuizServiceTest {

    @Mock
    private QuizRepository quizRepository;

    @InjectMocks
    private QuizService quizService;

    private Quiz quiz1;
    private Quiz quiz2;

    @BeforeEach
    void setUp() {
        quiz1 = new Quiz();
        quiz1.setQuizId(1L);
        quiz1.setTitle("Java Basics");
        quiz1.setDescription("Test your Java knowledge");

        quiz2 = new Quiz();
        quiz2.setQuizId(2L);
        quiz2.setTitle("Spring Framework");
        quiz2.setDescription("Learn about Spring");
    }

    @Test
    void testGetAllQuizzes() {
        // Given
        when(quizRepository.findAll()).thenReturn(Arrays.asList(quiz1, quiz2));

        // When
        List<Quiz> result = quizService.getAllQuizzes();

        // Then
        assertEquals(2, result.size());
        assertTrue(result.contains(quiz1));
        assertTrue(result.contains(quiz2));
    }

    @Test
    void testGetQuizById() {
        // Given
        when(quizRepository.findById(1L)).thenReturn(Optional.of(quiz1));

        // When
        Optional<Quiz> result = quizService.getQuizById(1L);

        // Then
        assertTrue(result.isPresent());
        assertEquals("Java Basics", result.get().getTitle());
    }

    @Test
    void testSaveQuiz() {
        // Given
        when(quizRepository.save(any(Quiz.class))).thenReturn(quiz1);

        // When
        Quiz savedQuiz = quizService.saveQuiz(quiz1);

        // Then
        assertNotNull(savedQuiz);
        assertEquals("Java Basics", savedQuiz.getTitle());
        verify(quizRepository, times(1)).save(quiz1);
    }
}