package com.devsuperior.dscatalog.tests.repositories;

import com.devsuperior.dscatalog.entities.Product;
import com.devsuperior.dscatalog.repositories.ProductRepository;
import com.devsuperior.dscatalog.tests.factory.ProductFactory;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.time.Instant;
import java.util.Optional;

@DataJpaTest
public class ProductRepositoryTests {

    @Autowired
    private ProductRepository productRepository;

    private long existingId;
    private long nonExistingId;
    private long countTotalProducts;
    private long countPCGamerProducts;
    private PageRequest pageRequest;

    @BeforeEach
    void setup() throws Exception {
        existingId = 1L;
        nonExistingId = 1000L;
        countTotalProducts = 25L;
        countPCGamerProducts=21L;
        pageRequest = PageRequest.of(0, 10);
    }

    @Test
    public void findShouldReturnNothingWhenNameDoesNotExists() {

        String name = "Camera";

        Page<Product> resilt = productRepository.find(null, name, pageRequest);

        Assertions.assertTrue(resilt.isEmpty());

    }

    @Test
    public void findShouldReturnAllProductsWhenNameIsEmpty() {

        String name = "";

        Page<Product> resilt = productRepository.find(null, name, pageRequest);

        Assertions.assertFalse(resilt.isEmpty());
        Assertions.assertEquals(countTotalProducts, resilt.getTotalElements());

    }

    @Test
    public void findShouldReturnProductsWhenNameExistsIgnoreCase() {

        String name = "pc gAMer";

        Page<Product> resilt = productRepository.find(null, name, pageRequest);

        Assertions.assertFalse(resilt.isEmpty());
        Assertions.assertEquals(countPCGamerProducts, resilt.getTotalElements());

    }

    @Test
    public void findShouldReturnProductsWhenNameExists() {

        String name = "PC Gamer";

        Page<Product> resilt = productRepository.find(null, name, pageRequest);

        Assertions.assertFalse(resilt.isEmpty());
        Assertions.assertEquals(countPCGamerProducts, resilt.getTotalElements());

    }

    @Test
    public void deleteShouldDeleteObjectWhenIdExists() {

        productRepository.deleteById(existingId);
        Optional<Product> result = productRepository.findById(existingId);

        Assertions.assertFalse(result.isPresent());
    }
    @Test
    public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
        Product product = ProductFactory.createProduct();
        product.setId(null);

        product = productRepository.save(product);
        Optional<Product> result = productRepository.findById(product.getId());

        Assertions.assertNotNull(product.getId());
        Assertions.assertEquals(countTotalProducts + 1, product.getId());
        Assertions.assertTrue(result.isPresent());
        Assertions.assertSame(result.get(), product);

    }


    @Test
    public void deleteShouldThrowExceptionWhenIdDoesNotExists() {

        Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
            productRepository.deleteById(nonExistingId);
        });

    }
}
