package com.project.openlibrary.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.openlibrary.model.Book;
import com.project.openlibrary.repository.BookRepository;
import com.project.openlibrary.service.BookService;

@Service
public class BookServiceImpl implements BookService {
	
	@Autowired
	private BookRepository bookRepository;

	@Override
	public List<Book> getAllBookRecords() {
		
		return bookRepository.findAll();
	}

	@Override
	public void saveBookRecord(Book book) {
		this.bookRepository.save(book);
		
	}

	@Override
	public Book getBookById(Integer bookId) {
		Optional<Book> optional=bookRepository.findById(bookId);
		Book book=null;
		if(optional.isPresent()) {
			book=optional.get();
		}else {
			throw new RuntimeException("Book not foudn by id"+bookId);
		}
		return book;
	}

	@Override
	public void deleteBookbyId(Integer bookId) {
		this.bookRepository.deleteById(bookId);
		
	}

}
