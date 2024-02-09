package com.project.openlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import com.project.openlibrary.model.Author;
import com.project.openlibrary.service.AuthorService;
@Controller
public class AuthorController {
	
	@Autowired
	private AuthorService authorService;
	
	//display list of books
		@GetMapping("/author")
		public String viewHomePage(Model model) {
			model.addAttribute("listauthors", authorService.getAllAuthors());
			
			return "author";
			
		}
		@GetMapping("/showNewAuthorForm")
		public String showNewAuthorForm(Model model) {
			// create model attribute to bind form data
			Author author =new Author();
			model.addAttribute("author", author);
			return "new_author";
			
		}
		@PostMapping("/saveAuthor")
		public String saveBookRecord(@ModelAttribute("author") Author author) {
			// save employee to database
			authorService.saveAuthor(author);
			return "redirect:/author";
			
		}
		 @GetMapping("/updateAuthor/{authorId}")
			public String showFormForUpdate(@PathVariable(value="authorId") Integer authorId, Model model) {
				 //get the book from the service
				 Author author=authorService.getAuthorById(authorId);
				 
				// set employee as a model attribute to pre-populate the form
				 model.addAttribute("author", author);
				return "update_author";
				 
			 }
			 @GetMapping("/deleteAuthor/{authorId}")
			 public String deleteAuthor(@PathVariable(value="authorId") Integer authorId) {
				// call delete employee method 
				 this.authorService.deleteAuthorbyId(authorId);
				return "redirect:/author";
				 
			 }
		

}
