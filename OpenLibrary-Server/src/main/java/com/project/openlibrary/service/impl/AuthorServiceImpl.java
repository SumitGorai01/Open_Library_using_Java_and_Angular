package com.project.openlibrary.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.openlibrary.entity.Author;
import com.project.openlibrary.repository.AuthorRepository;
import com.project.openlibrary.service.AuthorService;

@Service
public class AuthorServiceImpl implements AuthorService {
	
	@Autowired
	AuthorRepository authorRepository;

	@Override
	public Author addAuthor(Author author) {
		return this.authorRepository.save(author);
	}

	@Override
	public Author updateAuthor(Author author) {
		return this.authorRepository.save(author);
	}

	@Override
	public Set<Author> getAllAuthor() {
		return new LinkedHashSet<>(this.authorRepository.findAll());
	}

	@Override
	public Author getAuthor(Integer authorId) {
		return this.authorRepository.findById(authorId).get();
	}

	@Override
	public void deleteAuthor(Integer authorId) {
		Author author =new Author();
		author.setAuthorId(authorId);
		this.authorRepository.deleteById(authorId);
	}

}
