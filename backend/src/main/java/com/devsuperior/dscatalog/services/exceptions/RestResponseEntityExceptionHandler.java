package com.devsuperior.dscatalog.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)
    public ResponseEntity<?> entityNotFoundHandling(EntityNotFoundException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(HttpStatus.NOT_FOUND.value(), new Date(), exception.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globalExceptionHandling(Exception exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(HttpStatus.INTERNAL_SERVER_ERROR.value(), new Date(), exception.getMessage(), request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}
