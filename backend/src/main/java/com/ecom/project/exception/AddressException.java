package com.ecom.project.exception;

import org.springframework.http.HttpStatus;

public class AddressException extends GeneralException {
    public AddressException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
