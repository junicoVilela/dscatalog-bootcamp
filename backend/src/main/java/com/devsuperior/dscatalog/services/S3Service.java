package com.devsuperior.dscatalog.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;


@Service
public class S3Service {

    private static Logger LOG = LoggerFactory.getLogger(S3Service.class);

    /*@Autowired
    private AmazonS3 s3client;

    @Value("${s3.bucket}")
    private String bucketName;

    public URL uploadFile(MultipartFile file) {
        try {
            String originalName = file.getOriginalFilename();
            String extension = FilenameUtils.getExtension(originalName);
            String filename = Instant.now().toDate().getTime() + "." + extension;

            InputStream is = file.getInputStream();
            String contentType = file.getContentType();

            return uploadFile(is, filename, contentType);
        } catch (IOException e) {
            throw new IllegalArgumentException(e.getMessage());
        }
    }

    private URL uploadFile(InputStream is, String filename, String contentType) {
        ObjectMetadata meta = new ObjectMetadata();
        meta.setContentType(contentType);
        LOG.info("Upload Start");
        s3client.putObject(bucketName, filename, is, meta);
        LOG.info("Upload finish");

        return s3client.getUrl(bucketName, filename);
    }*/
}
