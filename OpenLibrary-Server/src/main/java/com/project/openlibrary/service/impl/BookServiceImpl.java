package com.project.openlibrary.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.openlibrary.entity.Book;
import com.project.openlibrary.repository.BookRepository;
import com.project.openlibrary.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository bookRepository;

	@Override
	public Book addBook(Book book) {		
		return this.bookRepository.save(book);
	}

	@Override
	public Book updateBook(Book book) {
		return this.bookRepository.save(book);
	}

	@Override
	public Set<Book> getAllBooks() {
		return new LinkedHashSet<>(this.bookRepository.findAll());
	}

	@Override
	public Book getBook(Integer bookId) {
		return this.bookRepository.findById(bookId).get();
	}

	@Override
	public void deleteBook(Integer bookId) {
		this.bookRepository.deleteById(bookId);
		
	}

}
