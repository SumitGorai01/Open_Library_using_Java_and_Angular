package com.project.openlibrary.service.impl;

import java.util.LinkedHashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.openlibrary.entity.User;
import com.project.openlibrary.entity.UserRole;
import com.project.openlibrary.helper.UserFoundException;
import com.project.openlibrary.repository.RoleRepository;
import com.project.openlibrary.repository.UserRepository;
import com.project.openlibrary.service.UserService;


@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RoleRepository roleRepository;

	// creating user
	@Override
	public User createUser(User user, Set<UserRole> userRoles) throws Exception {

		User local = this.userRepository.findByUsername(user.getUsername());
		if (local != null) {
			System.out.println("User is already there!!");
			throw new UserFoundException();
		} else {
			// user create
			for (UserRole ur : userRoles) {
				roleRepository.save(ur.getRole());
			}
			user.getUserRoles().addAll(userRoles);
			local = this.userRepository.save(user);
		}
		return local;
	}

	// getting user by username
	@Override
	public User getUser(String username) {
		// TODO Auto-generated method stub
		return this.userRepository.findByUsername(username);
	}

	// delete user by id
	@Override
	public void deleteUser(Long userId) {
		this.userRepository.deleteById(userId);
	}

	@Override
	public Set<User> getAllUsers() {
		// TODO Auto-generated method stub
		return new LinkedHashSet<>(this.userRepository.findAll());
	}

	@Override
	public User updateUser(User user) {
		// TODO Auto-generated method stub
		return this.userRepository.save(user);
	}

	
}
