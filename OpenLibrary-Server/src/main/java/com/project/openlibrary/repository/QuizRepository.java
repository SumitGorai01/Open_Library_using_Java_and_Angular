package com.project.openlibrary.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.openlibrary.entity.Quiz;
import com.project.openlibrary.entity.Category;


@Repository
public interface QuizRepository extends JpaRepository<Quiz, Long>{
	public List<Quiz> findByCategory(Category category);

	public List<Quiz> findByActive(Boolean b);

	public List<Quiz> findByCategoryAndActive(Category c,Boolean b);
}
