package com.project.openlibrary.helper;

public class BadCredentialException extends Exception {

	public BadCredentialException() {
		super("Invalid Credential !! Try with another one");
	}
	public BadCredentialException(String msg) {
		super(msg);
	}
}
