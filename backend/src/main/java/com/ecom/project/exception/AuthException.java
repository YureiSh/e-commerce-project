package com.ecom.project.exception;

import org.springframework.http.HttpStatus;

public class AuthException extends GeneralException {

    public AuthException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
