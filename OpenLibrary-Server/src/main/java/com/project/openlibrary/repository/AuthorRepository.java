package com.project.openlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.openlibrary.entity.Author;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Integer>{

}
