package com.project.openlibrary.service;

import java.util.List;

import com.project.openlibrary.entity.Book;

public interface BookService {
	
	List< Book > getAllBookRecords();
	void saveBookRecord(Book book);
	Book getBookById(Integer bookId);
	void deleteBookbyId(Integer bookId);

}
