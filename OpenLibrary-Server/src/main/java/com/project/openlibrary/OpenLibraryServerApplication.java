package com.project.openlibrary;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.project.openlibrary.entity.Role;
import com.project.openlibrary.entity.User;
import com.project.openlibrary.entity.UserRole;
import com.project.openlibrary.service.UserService;

@SpringBootApplication
public class OpenLibraryServerApplication implements CommandLineRunner {

	@Autowired
	private UserService userService;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(OpenLibraryServerApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		System.out.println("Open Library Application Start....");

		User user = new User();

		try {
			user.setName("Sumit Gorai");
			user.setUsername("sumit01");
			user.setPassword(this.bCryptPasswordEncoder.encode("abc"));
			user.setPhone("9876543210");
			user.setEmail("sumit@gmail.com");
			user.setProfile("default.png");

			Role role1 = new Role();
			role1.setRoleId(44L);
			role1.setRoleName("ADMIN");

			Set<UserRole> userRoleSet = new HashSet<UserRole>();
			UserRole userRole = new UserRole();
			userRole.setRole(role1);
			userRole.setUser(user);

			userRoleSet.add(userRole);

			User user1 = this.userService.createUser(user, userRoleSet);
			System.out.println(user1.getUsername());
		} catch (Exception e) {
			System.out.println("Admin with this details Already Present....");
		}

	}
}
