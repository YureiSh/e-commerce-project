package com.ecom.project.exception;

import org.springframework.http.HttpStatus;

public class UserException extends GeneralException {

    public UserException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
