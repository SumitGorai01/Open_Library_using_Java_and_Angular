package com.project.openlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.project.openlibrary.entity.Book;
import com.project.openlibrary.service.BookService;

@Controller
public class BookController {
	
	@Autowired
	private BookService bookService;
	
	//display list of books
	@GetMapping("/book")
	public String viewHomePage(Model model) {
		model.addAttribute("listBooks", bookService.getAllBookRecords());
	
		return "index_book";
		
	}
	@GetMapping("/showNewBookForm")
	public String showNewBookForm(Model model) {
		// create model attribute to bind form data
		Book book =new Book();
		model.addAttribute("book", book);
		return "new_Book";
		
	}
	@PostMapping("/saveBook")
	public String saveBookRecord(@ModelAttribute("book") Book book) {
		// save employee to database
		bookService.saveBookRecord(book);
		return "redirect:/book";
		
	}
	 @GetMapping("/showFormForUpdate/{bookId}")
	public String showFormForUpdate(@PathVariable(value="bookId") Integer bookId, Model model) {
		 //get the book from the service
		 Book book=bookService.getBookById(bookId);
		 
		// set employee as a model attribute to pre-populate the form
		 model.addAttribute("book", book);
		return "update_book";
		 
	 }
	 @GetMapping("/deleteBook/{bookId}")
	 public String deleteBook(@PathVariable(value="bookId") Integer bookId) {
		// call delete employee method 
		 this.bookService.deleteBookbyId(bookId);
		return "redirect:/book";
		 
	 }
	

}
