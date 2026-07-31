package com.ecom.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

import java.time.LocalDateTime;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(GeneralException.class)
    public ResponseEntity<GeneralErrorResponse> handleException(GeneralException exception){
        GeneralErrorResponse errorResponse = new GeneralErrorResponse(exception.getHttpStatus().value(),
                exception.getMessage(), System.currentTimeMillis(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, exception.getHttpStatus());
    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<GeneralErrorResponse> handleException(MethodArgumentTypeMismatchException exception){

        GeneralErrorResponse errorResponse =
                new GeneralErrorResponse(HttpStatus.BAD_REQUEST.value(),
                exception.getMessage(), System.currentTimeMillis(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<GeneralErrorResponse> handleException(MethodArgumentNotValidException exception){

        GeneralErrorResponse errorResponse =
                new GeneralErrorResponse(HttpStatus.BAD_REQUEST.value(),
                        exception.getMessage(), System.currentTimeMillis(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<GeneralErrorResponse> handleException(Exception exception){

        GeneralErrorResponse errorResponse =
                new GeneralErrorResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                        exception.getMessage(), System.currentTimeMillis(), LocalDateTime.now());
        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
