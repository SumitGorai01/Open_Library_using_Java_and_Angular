package com.project.openlibrary.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="books")
public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="book_id")
	private Integer bookId;
	
	@Column(name="book_name",unique = true, nullable = false)
	private String bookName;
		
	@Column(name="publish_date")
	private Date publishDate;
	
	private String image;
	
	private String bookPdf;

	// Define Many-to-One relationship with Author
//    @ManyToOne
//    @JoinColumn(name = "author_id", nullable = false)
	
	@ManyToOne(fetch = FetchType.EAGER)
    private Author author;
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getBookPdf() {
		return bookPdf;
	}

	public void setBookPdf(String bookPdf) {
		this.bookPdf = bookPdf;
	}

	public Integer getBookId() {
		return bookId;
	}

	public void setBookId(Integer bookId) {
		this.bookId = bookId;
	}

	public String getBookName() {
		return bookName;
	}

	public void setBookName(String bookName) {
		this.bookName = bookName;
	}

	public Date getPublishDate() {
		return publishDate;
	}

	public void setPublishDate(Date publishDate) {
		this.publishDate = publishDate;
	}

	public Book(String bookName, Integer authorId, Date publishDate, String image, String bookPdf) {
		super();
		this.bookName = bookName;
		this.publishDate = publishDate;
		this.image = image;
		this.bookPdf = bookPdf;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}

	public Book(String bookName, Integer authorId, Date publishDate, String image, String bookPdf, Author author) {
		super();
		this.bookName = bookName;
		this.publishDate = publishDate;
		this.image = image;
		this.bookPdf = bookPdf;
		this.author = author;
	}

	public Book(Integer bookId, String bookName, Date publishDate, String image, String bookPdf, Author author) {
		super();
		this.bookId = bookId;
		this.bookName = bookName;
		this.publishDate = publishDate;
		this.image = image;
		this.bookPdf = bookPdf;
		this.author = author;
	}

	public Book() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	
	
	
}