package com.devsuperior.dscatalog.services.exceptions;

import java.util.Date;

public class ErrorDetails {

    private int statusCode;
    private Date timestamp;
    private String error;
    private String message;
    private String path;

    public ErrorDetails() {
    }

    public ErrorDetails(int statusCode, Date timestamp, String error, String message, String path) {
        super();
        this.statusCode = statusCode;
        this.timestamp = timestamp;
        this.error = error;
        this.message = message;
        this.path = path;
    }

    public Date getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Date timestamp) {
        this.timestamp = timestamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public int getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(int statusCode) {
        this.statusCode = statusCode;
    }

    public String getError() {
        return error;
    }

    public void setError(String error) {
        this.error = error;
    }
}
