package com.project.openlibrary.service;

import java.util.Set;

import com.project.openlibrary.entity.User;
import com.project.openlibrary.entity.UserRole;


public interface UserService {

	// for creating user
	public User createUser(User user, Set<UserRole> userRoles) throws Exception;

	//get user by username
	public User getUser(String username);
	
	//to delete user by id
	public void deleteUser(Long userId);	

	public Set<User> getAllUsers();

	public User updateUser(User user);

	
}
