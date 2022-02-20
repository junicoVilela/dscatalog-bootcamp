package com.devsuperior.dscatalog.repositories;

import com.devsuperior.dscatalog.entities.Category;
import com.devsuperior.dscatalog.entities.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT distinct p FROM Product p INNER JOIN p.categories c " +
            "WHERE ( COALESCE(:categories) IS NULL OR c IN :categories ) AND (LOWER(p.name) LIKE LOWER(CONCAT('%',:name,'%')) ) ")
    Page<Product> find(List<Category> categories, String name, Pageable pageable);
}
