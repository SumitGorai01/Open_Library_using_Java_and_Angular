package com.project.openlibrary.service.impl;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.openlibrary.entity.Category;
import com.project.openlibrary.entity.Quiz;
import com.project.openlibrary.repository.QuizRepository;
import com.project.openlibrary.service.QuizService;

@Service
public class QuizServiceImpl implements QuizService {

	
	@Autowired
	private QuizRepository quizRepository;
	
	@Override
	public Quiz addQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	}

	@Override
	public Quiz updateQuiz(Quiz quiz) {
		return this.quizRepository.save(quiz);
	}

	@Override
	public Set<Quiz> getQuizzes() {
		return new HashSet<>(this.quizRepository.findAll());
	}

	@Override
	public Quiz getQuiz(Long quizId) {
		return this.quizRepository.findById(quizId).get();
	}

	@Override
	public void deleteQuiz(Long quizId) {
		
		this.quizRepository.deleteById(quizId);
	}

	@Override
	public List<Quiz> getQuizzesOfCategory(Category category) {
		// TODO Auto-generated method stub
		return this.quizRepository.findByCategory(category);
	}

	@Override
	public List<Quiz> getActiveQuizzes() {
		// TODO Auto-generated method stub
		return this.quizRepository.findByActive(true);
	}

	@Override
	public List<Quiz> getActiveQuizzesOfCategory(Category c) {
		// TODO Auto-generated method stub
		return this.quizRepository.findByCategoryAndActive(c,true);
	}

}
