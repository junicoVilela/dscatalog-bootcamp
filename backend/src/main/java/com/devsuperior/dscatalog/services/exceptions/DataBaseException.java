package com.devsuperior.dscatalog.services.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class DataBaseException extends RuntimeException {

    private static final long serialVersionUID = -5019539828430992866L;

    public DataBaseException(String message) {
        super(message);
    }
}
