package com.ecom.project.exception;

import org.springframework.http.HttpStatus;

public class CardException extends GeneralException {
    public CardException(String message, HttpStatus httpStatus) {
        super(message, httpStatus);
    }
}
