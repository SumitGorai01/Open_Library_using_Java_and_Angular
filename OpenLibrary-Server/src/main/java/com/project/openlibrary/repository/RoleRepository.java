package com.project.openlibrary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.project.openlibrary.entity.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role,Long>{

}
