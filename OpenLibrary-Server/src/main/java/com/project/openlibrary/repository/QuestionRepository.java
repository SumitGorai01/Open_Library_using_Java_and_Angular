package com.project.openlibrary.repository;

import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.openlibrary.entity.Question;
import com.project.openlibrary.entity.Quiz;

@Repository
public interface QuestionRepository extends JpaRepository<Question, Long>{

	Set<Question> findByQuiz(Quiz quiz);

}
