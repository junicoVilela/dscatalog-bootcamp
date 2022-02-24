package com.devsuperior.dscatalog.dto;

import org.springframework.web.multipart.MultipartFile;

import java.io.Serializable;

public class FileDTO implements Serializable {
    private static final long serialVersionUID = 9120331771057734378L;

    private MultipartFile multipartFile;

    public FileDTO() {
    }

    public MultipartFile getMultipartFile() {
        return multipartFile;
    }

    public void setMultipartFile(MultipartFile multipartFile) {
        this.multipartFile = multipartFile;
    }
}
