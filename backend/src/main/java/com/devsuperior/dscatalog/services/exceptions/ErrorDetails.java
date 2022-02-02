package com.devsuperior.dscatalog.services.exceptions;

import java.util.Date;

public class ErrorDetails {

    private int statusCode;
    private Date timestamp;
    private String message;
    private String path;

    public ErrorDetails() {
    }

    public ErrorDetails(int statusCode, Date timestamp, String message, String path) {
        super();
        this.statusCode = statusCode;
        this.timestamp = timestamp;
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
}
