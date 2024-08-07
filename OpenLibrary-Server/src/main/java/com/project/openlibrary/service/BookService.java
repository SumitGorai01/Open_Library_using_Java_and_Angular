package com.project.openlibrary.service;

import java.util.Set;

import com.project.openlibrary.entity.Book;

public interface BookService {
	public Book addBook(Book book);

	public Book updateBook(Book book);

	public Set<Book> getAllBooks();

	public Book getBook(Integer bookId);

	public void deleteBook(Integer bookId);

}
