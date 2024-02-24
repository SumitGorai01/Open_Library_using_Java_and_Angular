package com.project.openlibrary.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.project.openlibrary.entity.Author;
import com.project.openlibrary.service.AuthorService;

@RestController
@RequestMapping("/author")
public class AuthorController {

	@Autowired
	private AuthorService authorService;

	// add book
	@PostMapping("/")
	public ResponseEntity<?> addAuthor(@RequestBody Author author) {

		Author author1 = this.authorService.addAuthor(author);

		return ResponseEntity.ok(author1);
	}

	// get author
	@GetMapping("/{authorId}")
	public Author getAuthor(@PathVariable("authorId") Integer authorId) {

		return this.authorService.getAuthor(authorId);
	}

	// get all author
	@GetMapping("/")
	public ResponseEntity<?> getAllAuthors() {
		return ResponseEntity.ok(this.authorService.getAllAuthor());
	}

	// update author
	@PutMapping("/")
	public Author updateAuthor(@RequestBody Author author) {
		return this.authorService.updateAuthor(author);
	}

	// delete author
	@DeleteMapping("/{authorId}")
	public void deleteAuthor(@PathVariable("authorId") Integer authorId) {
		this.authorService.deleteAuthor(authorId);
	}

}
