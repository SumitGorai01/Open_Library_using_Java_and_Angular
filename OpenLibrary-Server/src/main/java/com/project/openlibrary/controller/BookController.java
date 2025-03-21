package com.project.openlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.project.openlibrary.entity.Book;
import com.project.openlibrary.service.BookService;

@Controller
@RequestMapping("/book")
@CrossOrigin("*")
public class BookController {

	@Autowired
	private BookService bookService;

	// add book
	@PostMapping("/")
	public ResponseEntity<?> addBook(@RequestBody Book book) {

		Book book1 = this.bookService.addBook(book);

		return ResponseEntity.ok(book1);
	}

	// get book
	@GetMapping("/{bookId}")
	public Book getBook(@PathVariable("bookId") Integer bookId) {

		return this.bookService.getBook(bookId);
	}

	// get all books
	@GetMapping("/")
	public ResponseEntity<?> getAllBooks() {
		return ResponseEntity.ok(this.bookService.getAllBooks());
	}

	// update category
	@PutMapping("/")
	public Book updateBook(@RequestBody Book book) {
		return this.bookService.updateBook(book);
	}

	// delete category
	@DeleteMapping("/{bookId}")
	public void deleteBook(@PathVariable("bookId") Integer bookId) {
		this.bookService.deleteBook(bookId);
	}
}
