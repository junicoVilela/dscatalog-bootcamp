package com.devsuperior.dscatalog.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;

import java.util.Date;

@ControllerAdvice
public class RestResponseEntityExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> resourceNotFoundHandling(ResourceNotFoundException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.NOT_FOUND.value(),
                        new Date(),
                        "Resource not found",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(DataBaseException.class)
    public ResponseEntity<?> dataBaseHandling(DataBaseException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.BAD_REQUEST.value(),
                        new Date(),
                        "Database exception",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<?> validation(MethodArgumentNotValidException exception, WebRequest request){
        ValidationError errorDetails = new ValidationError();
        errorDetails.setStatusCode(HttpStatus.UNPROCESSABLE_ENTITY.value());
        errorDetails.setTimestamp(new Date());
        errorDetails.setError("Validation exception");
        errorDetails.setMessage(exception.getMessage());
        errorDetails.setPath(request.getDescription(false));

        for (FieldError f: exception.getBindingResult().getFieldErrors()) {
            errorDetails.addError(f.getField(), f.getDefaultMessage());
        }
        
        return new ResponseEntity<>(errorDetails, HttpStatus.UNPROCESSABLE_ENTITY);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> globalExceptionHandling(Exception exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.INTERNAL_SERVER_ERROR.value(),
                        new Date(),
                        "Generic error",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    /*@ExceptionHandler(AmazonServiceException.class)
    public ResponseEntity<?> amazonService(AmazonServiceException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.BAD_REQUEST.value(),
                        new Date(),
                        "AWS Exception",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(AmazonClientException.class)
    public ResponseEntity<?> amazonClient(AmazonClientException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.BAD_REQUEST.value(),
                        new Date(),
                        "AWS Exception",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }*/

    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<?> amazonClient(IllegalArgumentException exception, WebRequest request){
        ErrorDetails errorDetails =
                new ErrorDetails(
                        HttpStatus.BAD_REQUEST.value(),
                        new Date(),
                        "Bad Request",
                        exception.getMessage(),
                        request.getDescription(false));
        return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
    }

}
